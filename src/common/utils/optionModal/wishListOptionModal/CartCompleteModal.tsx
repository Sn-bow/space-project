import { useRouter } from 'next/router'
import { IMypageCartConfirmModalPropsType } from '../../../../components/units/mypage/Mypage.type'
import * as S from './CartCompleteModal.style'

const CartCompleteModal = (props: IMypageCartConfirmModalPropsType) => {
    const { plusModalHandler, element } = props
    const router = useRouter()

    return (
        <S.Contain>
            <S.Header>
                <S.HeaderTitle>장바구니 담기</S.HeaderTitle>
                <S.HeaderClose
                    onClick={() => { plusModalHandler(element.id); }}
                >
                    X
                </S.HeaderClose>
            </S.Header>
            <S.ContentBox>
                <S.ContentImg src='' alt='' />
                <S.ContentText>{`장바구니에 상품이 정상적으로 담겼습니다.`}</S.ContentText>
            </S.ContentBox>
            <S.ConfirmBox>
                <S.ConfirmCartButton
                    onClick={async () => await router.push('/cart')}
                >
                    장바구니 이동
                </S.ConfirmCartButton>
                <S.ConfirmKeepButton onClick={() => { plusModalHandler(element.id); }}>쇼핑계속하기</S.ConfirmKeepButton>
            </S.ConfirmBox>
        </S.Contain>
    )
}

export default CartCompleteModal