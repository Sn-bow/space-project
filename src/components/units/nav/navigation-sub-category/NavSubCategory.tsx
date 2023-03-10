import { Router, useRouter } from 'next/router'
import { useState } from 'react'
import { INavSubCategoryPropsType } from '../Navigation.type'
import * as S from './NavSubCategory.style'

const NavSubCategory = (props: INavSubCategoryPropsType) => {
    const { subCategoryData, pointerLeaveHandelr, mainCategoryId } = props

    const [imgState, setImgState] = useState<number>()

    const router = useRouter()

    const imgStateHandler = (id?: number) => {
        setImgState(id)
    }
    const imgLeaveHandler = () => {
        setImgState(0)
    }

    // namingCategory pageNation function
    const namingCategoryPageNation = (namingId: number, namingName: string) => {
        if (namingId === 1) {
            router.push('/launchingCalendar')
        }
        else if (namingId === 2) {
            router.push('/lookbook')
        }
        // 나중에 지울거
        else if (namingId === 3) {
            router.push('/')
        }
        else if (namingId === 4) {
            router.push('/')
        }
        else if (namingId === 5) {
            router.push('/')
        }
        //
        else if (namingId === 6) {
            router.push('/event')
        }
        else {
            router.push(`/productlist/mainCategory=${mainCategoryId}&color=&item=&sort=${namingName === "ALL" ? '' : namingName.toLowerCase()}&subCategory=&name=`)
        }
    }

    return (
        <>
            {/* <S.Shadow /> */}
            <S.SubCategoryContain onPointerLeave={pointerLeaveHandelr}>
                <S.Box>
                    <S.NamingBox>
                        <S.NamingCategoryBox>
                            {subCategoryData.namingCategoies?.map(item =>
                                <S.NamingCategory
                                    key={item.namingId}
                                    onClick={() => { namingCategoryPageNation(item.namingId, item.namingName); }}
                                >
                                    {item.namingName}
                                </S.NamingCategory>
                            )
                            }
                        </S.NamingCategoryBox>
                        <S.SubCategoryBox>
                            {
                                subCategoryData.subCategories?.map(item =>
                                    <S.SubCategory
                                        key={item.id}
                                        onClick={async () => await router.push(`/productlist/mainCategory=${mainCategoryId}&color=&item=&sort=&subCategory=${item.id}&name=`)}
                                    >
                                        {item.name}
                                    </S.SubCategory>
                                )
                            }
                        </S.SubCategoryBox>
                    </S.NamingBox>
                    <S.ProductImgContain
                        onPointerLeave={imgLeaveHandler}
                    >
                        {subCategoryData.productInfo?.map(item =>
                            item !== null
                            &&
                            <div key={item?.productId} onClick={async () => await router.push(`/productdetail/${item.productId}`)} >
                                <S.ProductImgBox
                                    onPointerEnter={() => { imgStateHandler(item?.productId); }}
                                >
                                    <S.ProductImg src={item?.thumbnail} alt={item?.productName} />
                                </S.ProductImgBox>
                                {
                                    imgState === item?.productId
                                    &&
                                    <S.ProductImgShadow>
                                        <span>{item?.productName}</span>
                                        <span>{item?.price}</span>
                                    </S.ProductImgShadow>
                                }
                            </div>
                        )
                        }
                    </S.ProductImgContain>
                </S.Box>
            </S.SubCategoryContain>
        </>
    )
}

export default NavSubCategory