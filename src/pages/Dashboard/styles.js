import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  constntContainerStyle: { padding: 30 },
})``;
