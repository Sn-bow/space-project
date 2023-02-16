/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { API_IP } from '../../../common/utils/ApiIp'
import NavigationSearch from './navigation-search/NavigationSearch'
import NavSubCategory from './navigation-sub-category/NavSubCategory'
import * as S from "./Navigation.style"
import { INavigationData } from './Navigation.type'


const Navigation = () => {
    const [navigationData, setNavigationData] = useState<INavigationData[]>([])
    console.log('navigation : ', navigationData)
    const [categoryState, setCategoryState] = useState<number>()
    const [userPointerState, setUserPointerState] = useState<boolean>(false)
    const [serachModal, setSearchModal] = useState<boolean>(false)
    const router = useRouter()

    // const token = localStorage.getItem('access_token')

    const navigationDataHandler = async () => {
        try {
            await axios.get(`http://${API_IP}:3000/category`)
                .then(res => {
                    const { data } = res
                    if (data) {
                        setNavigationData(data)
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    const pointerHandler = (id: number) => {
        setCategoryState(id)
    }

    const pointerLeaveHandelr = () => {
        setCategoryState(0)
    }

    const userPointerHandler = () => {
        setUserPointerState(prv => !prv)
    }

    // mypage 이동
    const mypageMoveHandler = async () => {
        await router.push('/sign-in')
    }

    // search modal handler 
    const searchModalHandler = () => {
        setSearchModal(prv => !prv)
    }

    // logout handler 
    const logoutHandler = () => {
        localStorage.removeItem('access_token')
    }

    useEffect(() => {
        navigationDataHandler()
    }, [])

    return (
        <>

            <S.Contain>
                <S.InContain>
                    <S.ImgBox>
                        <S.LogoImg
                            src={'/images/spaceLogo.jpeg'}
                            alt='space_logo'
                            onClick={async () => await router.push('/')}
                        />
                    </S.ImgBox>
                    <S.NavContain>
                        {navigationData.map(el =>
                            <Fragment key={el.id}>
                                <S.NavCategory
                                    onPointerEnter={() => { pointerHandler(el.id); }}
                                    onClick={async () => await router.push(el.path === 'productList' ? `/productlist/mainCategory=${el.id}&color=&item=&sort=&subCategory=&name=` : `/${el.path}`)}
                                >
                                    {el.name}
                                </S.NavCategory>
                                {
                                    categoryState === el.id
                                    &&
                                    (
                                        el.namingCategoies !== null
                                        ||
                                        el.subCategories !== null
                                    )
                                    &&
                                    <>
                                        <NavSubCategory
                                            subCategoryData={el}
                                            pointerLeaveHandelr={pointerLeaveHandelr}
                                            mainCategoryId={el.id}
                                        />
                                    </>
                                }
                            </Fragment>
                        )}
                    </S.NavContain>
                    <S.UserSignIconContain
                    >
                        <S.UserOutLinedBox
                            onClick={async () =>
                                localStorage.getItem('access_token') ? await router.push('/mypage') : await router.push('/sign-in')
                            }
                        >
                            <S.UserOutLined
                                onPointerEnter={userPointerHandler}
                            />
                            {
                                (
                                    userPointerState
                                    &&
                                    !localStorage.getItem('access_token')
                                )
                                &&
                                <S.UserInfoLogIn
                                    onClick={mypageMoveHandler}
                                >
                                    <S.UserLoginBefore
                                        onPointerLeave={userPointerHandler}
                                    >
                                        <S.UserInfoNavSpan
                                            onClick={async () => await router.push('/sign-in')}
                                        >
                                            LOGIN
                                        </S.UserInfoNavSpan>
                                        <S.UserInfoNavSpanLast
                                            onClick={async () => await router.push('/sign-in')}
                                        >
                                            ORDER</S.UserInfoNavSpanLast>
                                    </S.UserLoginBefore>
                                </S.UserInfoLogIn>
                            }
                            {
                                (
                                    userPointerState
                                    &&
                                    localStorage.getItem('access_token')
                                )
                                &&
                                <S.UserInfoNav
                                    onPointerLeave={userPointerHandler}
                                >
                                    <S.UserInfoNavSpanBox>
                                        <S.UserInfoNavSpan
                                            onClick={logoutHandler}
                                        >
                                            LOGOUT
                                        </S.UserInfoNavSpan>
                                        <S.UserInfoNavSpan
                                            onClick={async () => await router.push('/mypage')}
                                        >
                                            MYPAGE
                                        </S.UserInfoNavSpan>
                                        <S.UserInfoNavSpanLast>ORDER</S.UserInfoNavSpanLast>
                                    </S.UserInfoNavSpanBox>
                                </S.UserInfoNav>
                            }
                        </S.UserOutLinedBox>
                        <S.SearchOutLinedBox>
                            <S.SearchOutLined
                                onClick={searchModalHandler}
                            />
                            {
                                serachModal
                                &&
                                <NavigationSearch
                                    searchModalHandler={searchModalHandler}
                                />
                            }
                        </S.SearchOutLinedBox>
                        <S.HeartOutLinedBox>
                            <S.HeartOutLined
                                onClick={async () => await router.push('/mypage/wish-list')}
                            />
                        </S.HeartOutLinedBox>
                        <S.ShoppingCartOutLinedBox>
                            <S.ShoppingCartOutLined
                                onClick={async () => await router.push('/cart')}
                            />
                        </S.ShoppingCartOutLinedBox>
                    </S.UserSignIconContain>
                </S.InContain>
            </S.Contain >
        </>
    )
}

export default Navigation