import { Form } from '@unform/web';
import {
  color, shadow, typograph,
} from 'neomedic-styles';
import styled from 'styled-components';

export const View = styled.div`
  display: flex;
`;

export const Container = styled.article`
  background-color: ${color.gray._100};
  box-shadow: ${({ expand }) => expand && shadow.horizontal};
  padding: 140px 48px 48px 48px;
  min-width: ${({ full }) => (full ? '100%' : '864px')};
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Right = styled.div`
  margin-left: auto;
`;

export const SubTitle = styled.h4`
  font-size: ${typograph.size.s3}px;
  font-weight: ${typograph.weight.regular};
  color: ${color.gray._600};
`;

export const Title = styled.h1`
  font-size: ${typograph.size.l2}px;
  font-weight: ${typograph.weight.bold};
  color: ${color.gray._1100};
`;

export const Search = styled(Form)`
  width: 100%;
  margin-top: 48px;
`;

export const Category = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
`;

export const HeadCategory = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleCategory = styled.h2`
  font-size: ${typograph.size.m2}px;
  color: ${color.gray._700};
  font-weight: ${typograph.weight.regular};
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 32px;
  column-gap: 32px;
`;
