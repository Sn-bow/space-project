import { MouseEvent } from 'react'
import MypageFilterList from '../mypageFilterList/MypageFilterList'
import * as S from './MypageMain.style'

const MypageMain = () => {
    return (
        <S.Contain>
            <S.PageTitle>주문처리 현황</S.PageTitle>
            <S.OrderStateBox>
                <S.TextBox>
                    <S.TitleName>입금대기</S.TitleName>
                    <S.Count>0</S.Count>
                </S.TextBox>
                <S.ArrowSign>{'>'}</S.ArrowSign>
                <S.TextBox>
                    <S.TitleName>상품준비중</S.TitleName>
                    <S.Count>0</S.Count>
                </S.TextBox>
                <S.ArrowSign>{'>'}</S.ArrowSign>
                <S.TextBox>
                    <S.TitleName>배송중</S.TitleName>
                    <S.Count>0</S.Count>
                </S.TextBox>
                <S.ArrowSign>{'>'}</S.ArrowSign>
                <S.TextBox>
                    <S.TitleName>배송완료</S.TitleName>
                    <S.Count>0</S.Count>
                </S.TextBox>
                <S.ArrowSign>{'>'}</S.ArrowSign>
                <S.TextBox>
                    <S.TitleName>취소/교환/반품</S.TitleName>
                    <S.Count>0/0/0</S.Count>
                </S.TextBox>
            </S.OrderStateBox>
            <div>
                <MypageFilterList />
            </div>
        </S.Contain>
    )
}

export default MypageMain