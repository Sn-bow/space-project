import { ChangeEvent, Fragment, MouseEvent } from 'react'
import CartOptionModal from '../../../common/utils/optionModal/OptionModal'
import * as S from './CartItem.style'

interface ICartItemType {
    cartItem: ICartItemInType[]
    checkedHandler: (event: ChangeEvent<HTMLInputElement>, id: string) => void,
    checkedState: string[],
    modalHandler: () => void,
    optionModal: boolean,
    colorIdHandler: (e: ChangeEvent<HTMLSelectElement>) => void,
    colorIdState: string,
    SelectDeleteClick: (e: any) => void,
    addCountHandler: (e: any) => void
    minusCountHandler: (e: any) => void
}

interface ICartItemInType {
    cartId: string,
    optionId: number,
    quantity: number,
    sizeName: string,
    colorName: string,
    productId: number,
    name: string,
    price: number,
    size: ISizeType,
    color: IColorType[],
    imgUrl: string
}

interface ISizeType {
    name: string
}

interface IColorType {
    colorId: number,
    colorName: string,
    options: IOptionsType[]
}

interface IOptionsType {
    size: string,
    stock: string,
    optionId: string
}


const CartItem = (props: ICartItemType) => {
    const { cartItem, checkedHandler, checkedState, modalHandler, optionModal, colorIdHandler, colorIdState, SelectDeleteClick, addCountHandler, minusCountHandler } = props

    return (
        <>
            {cartItem.map((el: ICartItemInType) => {
                return (
                    <Fragment key={el.cartId}>
                        <S.Contain>
                            <S.ItemCheckBox>
                                <input
                                    type='checkbox'
                                    id={el.cartId}
                                    onChange={(event) => { checkedHandler(event, el.cartId); }}
                                    checked={!!checkedState.includes(el.cartId)}
                                />
                            </S.ItemCheckBox>
                            <S.ItemItemInforMation>
                                <S.ItemImgBox>
                                    <S.ItemImg src={el.imgUrl} alt={el.imgUrl} />
                                </S.ItemImgBox>
                                <S.ItemInformationBox>
                                    <S.ItemInformation>{`${el.name} (${el.colorName})`}</S.ItemInformation>
                                    <S.ItemInformation>{`[옵션: (${el.quantity})/${el.size.name}]`}</S.ItemInformation>
                                    <S.ItemInformationChange onClick={modalHandler}>옵션변경</S.ItemInformationChange>
                                    {
                                        optionModal
                                        &&
                                        <CartOptionModal
                                            modalHandler={modalHandler}
                                            colorProps={el.color}
                                            colorIdHandler={colorIdHandler}
                                            colorIdState={colorIdState}
                                        />
                                    }
                                </S.ItemInformationBox>
                            </S.ItemItemInforMation>
                            <S.ItemCount>
                                <S.ItemCountButton
                                    id={el.cartId}
                                    value={el.quantity}
                                    onClick={minusCountHandler}
                                >
                                    -
                                </S.ItemCountButton>
                                <S.ItemCountText>{el.quantity}</S.ItemCountText>
                                <S.ItemCountButton
                                    id={el.cartId}
                                    value={el.quantity}
                                    onClick={addCountHandler}
                                >
                                    +
                                </S.ItemCountButton>
                            </S.ItemCount>
                            <S.ItemSavings>
                                <span>-</span>
                            </S.ItemSavings>
                            <S.ItemPost>
                                <S.ItemPostText>기본배송</S.ItemPostText>
                            </S.ItemPost>
                            <S.ItemPostPrice>
                                <S.ItemPostPriceText>무료</S.ItemPostPriceText>
                            </S.ItemPostPrice>
                            <S.ItemTotalPrice>
                                <S.ItemTotalPriceText>{el.price}</S.ItemTotalPriceText>
                            </S.ItemTotalPrice>
                            <S.ItemChoose>
                                <S.ItemChooseButton>주문하기</S.ItemChooseButton>
                                <S.ItemChooseButton>관심상품</S.ItemChooseButton>
                                <S.ItemChooseButton value={el.cartId} onClick={SelectDeleteClick}>삭제</S.ItemChooseButton>
                            </S.ItemChoose>
                        </S.Contain>
                    </Fragment>
                )
            })
            }
        </>
    )
}

export default CartItem