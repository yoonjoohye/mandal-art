import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import List from '../../components/list/List';
import Float from '../../components/button/Float';
import ReactHelmet from '../../components/ReactHelmet';
import Modal from '../../components/modal/Modal';
import { Container, FlexBox, Section } from '../../assets/css/Section.style';
import Banner from '../../components/mypage/Banner';
import { Color } from '../../assets/css/Theme.style';
import styled from 'styled-components';
import { getAPI, deleteAPI } from '../../utils/api';

const FloatWrapper = styled.div`
  ${FlexBox('center')};
  position: fixed;
  bottom: 10%;
  right: 5%;
`;

const Mypage = ({ user }) => {
  const [list, setList] = useState([]);
  const [articleId, setArticleId] = useState(null);
  const [confirmModal, setConfirmModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const getArticles = async () => {
    const res = await getAPI('/article');
    if (res) {
      setList(res.data);
      setLoading(true);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const onDelete = useCallback((id) => {
    setConfirmModal(true);
    setArticleId(id);
  }, []);

  const onConfirmOpen = async (articleId) => {
    let res = await deleteAPI(`/article/${articleId}`);
    if (res) {
      window.location.reload();
    }
  };

  return (
    <>
      {confirmModal && (
        <Modal
          isOpen={confirmModal}
          isConfirm={true}
          title="정말 삭제하시겠습니까?"
          contents="삭제하면 되돌릴 수 없습니다.<br/>그래도 삭제하시겠습니까?"
          bgColor={Color.whiteOpacity}
          onConfirmOpen={() => onConfirmOpen(articleId)}
        />
      )}
      <ReactHelmet
        title="마이페이지 - 나만의 만다라트"
        description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
        keywords="만다라트(mandal art) 사이트로 플랜(plan) 도구를 만나보세요! 나만의 만다라트를 만들어 성공 목표를 세워보세요."
      />
      <Section>
        <Container>
          <Banner
            user={user}
            title="나만의 <span style=color:#fff707>만다라트</span>로<br/>인생을 즐겁게!"
          />
          <List loading={loading} list={list} onDelete={onDelete} />
          <FloatWrapper>
            <Float />
          </FloatWrapper>
        </Container>
      </Section>
    </>
  );
};

export default connect((state) => ({
  user: state.auth.user,
}))(Mypage);
