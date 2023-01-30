import { Fragment, useState } from 'react'
import { IPlusOptionModalPropsType } from '../../../../components/units/mypage/Mypage.type'
import * as S from './PlusOptionModal.style'

const PlusOptionModal = (props: IPlusOptionModalPropsType) => {
    const { element, plusModalHandler } = props

    const [colorId, setColorId] = useState<string[]>([])
    const [colorName, setColorName] = useState<string>('')

    const [sizeId, setSizeId] = useState<string[]>([])
    const [sizeName, setSizeName] = useState<string>('')

    interface IItemCreateType {
        count: number
        size_id: string,
        size_name: string,
        color_id: string[],
        color_name: string,
    }

    const [itemCreate, setItemCreate] = useState<IItemCreateType[]>([])

    const [sumCount, setSumCount] = useState(0)

    const colorHandler = (checked: boolean, id: string, name: string) => {
        if (!checked) {
            setColorId(prv => [...prv, id])
            setColorName(name)
        }
        if (checked) {
            setColorId(colorId.filter(el => el !== id))
            setColorName('')
        }
    }


    const sizeHandler = (checked: boolean, id: string, name: string) => {
        if (!checked) {
            setSizeId(prv => [...prv, id])
            setSizeName(name)
            const itemCreateData = {
                size_id: id,
                size_name: name,
                color_id: colorId,
                color_name: colorName,
                count: 1
            }
            if (itemCreate.filter(el => el.size_id === id && el.color_id === colorId).length === 0) {
                setItemCreate((prv) => [...prv, itemCreateData])
                setSumCount(prv => prv + 1)
            } else {
                for (let i = 0; i < itemCreate.length; i++) {
                    if (itemCreate[i].size_id === id && itemCreate[i].color_id === colorId) {
                        itemCreate[i].count++
                    }
                }
                setSumCount(prv => prv + 1)
            }
        }
        if (checked) {
            setSizeId(sizeId.filter(el => el !== id))
            setSizeName('')
        }
    }

    const itemDeleteHandler = (id: string) => {
        setItemCreate(itemCreate.filter(el => el.size_id !== id))
    }

    const sumCountHandler = (counter: number, id: string) => {
        setSumCount(prv => prv + 1)
        for (let i = 0; i < itemCreate.length; i++) {
            if (itemCreate[i].size_id === id && itemCreate[i].color_id === colorId) {
                itemCreate[i].count++
            }
        }
    }

    return (
        <S.Contain key={element.id}>
            <S.Header>
                <S.HeaderTitle>옵션선택</S.HeaderTitle>
                <S.HeaderX
                    onClick={() => { plusModalHandler(element.optionId); }}
                >X</S.HeaderX>
            </S.Header>
            <S.ContentContain>
                <S.ContentTitle>{element.name}</S.ContentTitle>
                <S.ContentBox>
                    <S.ContentImg src={element.thumbnail} />
                    <S.ContentInBox>
                        <S.DisplayBox>
                            <S.ContentColorbox>
                                <S.ColorTitle>Color</S.ColorTitle>
                                <S.ColorButtonBox>
                                    <S.ColorBoxIn>
                                        {
                                            element.color.map((item) =>
                                                <Fragment key={item.colorId}>
                                                    <S.ColorLabel
                                                        htmlFor={item.colorId}
                                                        check={colorId}
                                                        colorId={item.colorId}
                                                    >
                                                        ({item.colorId}){item.colorName}
                                                    </S.ColorLabel>
                                                    <S.ColorCheckBox
                                                        id={item.colorId}
                                                        type='checkbox'
                                                        disabled={!colorId.includes(item.colorId) && colorId.length === 1}
                                                        onChange={(e) => { colorHandler(e.target.checked, item.colorId, item.colorName); }}
                                                    />
                                                </Fragment>
                                            )
                                        }
                                    </S.ColorBoxIn>
                                    <S.ColorText>{colorId.length === 1 ? `[필수]${colorName}` : `[필수]옵션을 선택해 주세요`}</S.ColorText>
                                </S.ColorButtonBox>
                            </S.ContentColorbox>
                            <S.ContentSizeBox>
                                <S.SizeTitle>Size</S.SizeTitle>
                                <S.SizeButtonBox>
                                    <S.ColorBoxIn>
                                        {element.color.map(item => colorId.includes(item.colorId) && item.size?.map((el) =>
                                            <Fragment key={el.sizeId}>
                                                <S.SizeLabel
                                                    htmlFor={el.sizeId}
                                                    check={sizeId}
                                                    sizeId={el.sizeId}
                                                >
                                                    ({el.sizeId}){el.sizeName}
                                                </S.SizeLabel>
                                                <S.SizeCheck
                                                    id={el.sizeId}
                                                    type='checkbox'
                                                    disabled={!sizeId.includes(el.sizeId) && sizeId.length === 1}
                                                    onChange={(e) => { sizeHandler(e.target.checked, el.sizeId, el.sizeName); }}
                                                />
                                            </Fragment>
                                        )
                                        )
                                            ??
                                            <>
                                                <S.SizeDefaultLabel htmlFor='1'>
                                                    [size]option</S.SizeDefaultLabel>
                                                <S.SizeDefaultInput id='1' />
                                            </>
                                        }
                                    </S.ColorBoxIn>
                                    <S.SizeText>{sizeId.length === 1 ? `[필수]${sizeName}` : `[필수]옵션을 선택해 주세요`}</S.SizeText>
                                </S.SizeButtonBox>
                            </S.ContentSizeBox>
                        </S.DisplayBox>
                    </S.ContentInBox>
                </S.ContentBox>
            </S.ContentContain>
            <S.ItemCreateSpan> 위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.</S.ItemCreateSpan>
            <S.ItemCreateContain>
                {
                    itemCreate.map((el) =>
                        <S.ItemCreateBox key={element.optionId}>
                            <S.ItemInfoBox>
                                <S.ItemInfoTitle>{element.name}</S.ItemInfoTitle>
                                <S.ItemInfo>-{el.color_name}/{el.size_name}</S.ItemInfo>
                            </S.ItemInfoBox>
                            <S.ItemCountBox>
                                <S.ItemCountInput
                                    type='number'
                                    value={el.count}
                                    min='1'
                                    onChange={() => { sumCountHandler(el.count, el.size_id); }}
                                />
                                <S.ItemDeleteButton onClick={() => { itemDeleteHandler(el.size_id); }}>x</S.ItemDeleteButton>
                            </S.ItemCountBox>
                            <S.ItemPrice>
                                {element.price}
                            </S.ItemPrice>
                        </S.ItemCreateBox>
                    )
                }
            </S.ItemCreateContain>
            <S.TotalPriceBox>
                <S.CountBox>총 상품금액(수량): <S.Count>&nbsp;{sumCount * element.price}&nbsp;</S.Count>({sumCount}개)</S.CountBox>
            </S.TotalPriceBox>
            <S.ButtonBox>
                <S.ConfirmOrderButton>바로 구매하기</S.ConfirmOrderButton>
                <S.ConfirmCartButton>장바구니 담기</S.ConfirmCartButton>
            </S.ButtonBox>
        </S.Contain >
    )
}

export default PlusOptionModal