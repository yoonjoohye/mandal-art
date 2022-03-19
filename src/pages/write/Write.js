import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { fromJS, List } from 'immutable';
import ReactHelmet from '../../components/ReactHelmet';
import Table from '../../components/input/Table';
import Title from '../../components/input/Title';
import Save from '../../components/button/Save';
import Print from '../../components/button/Print';
import Edit from '../../components/button/Edit';
import Modal from '../../components/modal/Modal';
import loginIcon from '../../assets/img/icon/login.svg';
import {
  Container,
  FlexBox,
  OnlyPc,
  Section,
} from '../../assets/css/Section.style';
import { Color } from '../../assets/css/Theme.style';
import styled from 'styled-components';
import Guide from '../../components/button/Guide';
import { useParams } from 'react-router-dom';
import { getAPI, patchAPI, postAPI } from '../../utils/api';

const WriteWrapper = styled.div`
  ${FlexBox('flex-end')};
`;
const Pc = styled.div`
  ${OnlyPc};
  margin-right: 5px;
`;

const Write = ({ user }) => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [data, setData] = useState(
    List([
      List(['', '', '', '', '', '', '', '', '']),
      List(['', '', '', '', '', '', '', '', '']),
      List(['', '', '', '', '', '', '', '', '']),
      List(['', '', '', '', '', '', '', '', '']),
      List(['', '', '', '', '', '', '', '', '']),
      List(['', '', '', '', '', '', '', '', '']),
      List(['', '', '', '', '', '', '', '', '']),
      List(['', '', '', '', '', '', '', '', '']),
      List(['', '', '', '', '', '', '', '', '']),
    ])
  );
  const [validModal, setValidModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [modal, setModal] = useState(false);

  console.log(id);

  const getArticle = async () => {
    if (window.location.pathname !== '/write') {
      const res = await getAPI(`/article/${id}`);
      console.log(res);
      if (res) {
        setTitle(res.data.title);
        setData(fromJS(res.data.content));
      }
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  const titleChange = useCallback((data) => {
    setTitle(data);
  }, []);

  const tableChange = useCallback((data) => {
    setData(data);
  }, []);

  const onValidOpen = useCallback((bool) => {
    setValidModal(bool);
  }, []);

  const onConfirmOpen = useCallback((bool) => {
    setConfirmModal(false);
    if (bool) {
      window.location.href = '/mypage';
    }
  }, []);

  const onPrint = () => {
    window.print();
  };

  const onSave = async (title, data) => {
    if (title.length > 0) {
      const res = await postAPI('/article', {
        title: title,
        content: data,
      });

      if (res) {
        setModal(true);
      }
    } else {
      setValidModal(true);
    }
  };

  const onEdit = async (title, data) => {
    if (title.length > 0) {
      const res = await patchAPI(`/article/${id}`, {
        title: title,
        content: data,
      });

      if (res) {
        setConfirmModal(true);
      }
    } else {
      setValidModal(true);
    }
  };
  return (
    <>
      <ReactHelmet
        title="작성 - 나만의 만다라트"
        description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
        keywords="만다라트(mandal art) 사이트로 플랜(plan) 도구를 만나보세요! 나만의 만다라트를 만들어 성공 목표를 세워보세요."
      />
      {!user && (
        <Modal
          isOpen={true}
          title="로그인이 필요합니다"
          contents="3초만에 소셜 계정으로 로그인하세요.<br/>로그인 후 만다라트 계획표를 세워보세요!"
          buttonName="로그인 하러가기"
          img={loginIcon}
          path="/login"
        />
      )}
      {validModal && (
        <Modal
          isOpen={validModal}
          isValid={true}
          title="제목을 입력해주세요"
          contents="제목을 작성하지 않았습니다.<br/>제목을 작성해야 저장할 수 있습니다."
          bgColor={Color.whiteOpacity}
          onValidOpen={onValidOpen}
        />
      )}
      {confirmModal && (
        <Modal
          isOpen={confirmModal}
          isConfirm={true}
          title="수정이 완료되었습니다."
          contents="바로 마이페이지에서 확인할 수 있습니다.<br/>수정된 내용을 확인하시겠습니까?"
          bgColor={Color.whiteOpacity}
          onConfirmOpen={onConfirmOpen}
        />
      )}
      {modal && (
        <Modal
          isOpen={modal}
          isConfirm={false}
          title="저장이 완료되었습니다."
          contents="바로 마이페이지에서 확인할 수 있습니다.<br/>저장된 내용을 확인해보세요."
          buttonName="마이페이지로 가기"
          path="/mypage"
          bgColor={Color.whiteOpacity}
        />
      )}
      <Section>
        <Container>
          <WriteWrapper>
            {window.location.pathname === '/write' ? (
              <>
                <Guide />
                <Save title={title} data={data} onSave={onSave} />
              </>
            ) : (
              <>
                <Pc>
                  <Print onPrint={onPrint} />
                </Pc>

                <Edit title={title} data={data} onEdit={onEdit} />
              </>
            )}
          </WriteWrapper>
          <Title title={title} titleChange={titleChange} />
          <Table data={data} tableChange={tableChange} />
        </Container>
      </Section>
    </>
  );
};

export default connect((state) => ({
  user: state.auth.user,
}))(Write);
