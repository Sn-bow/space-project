/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import axios from "axios"
import { HeartOutlined, HeartFilled } from "@ant-design/icons"
import React, { useEffect, useState } from "react"
import ProductItem from "../../../common/libraries/productItem/ProductItem"
import styled from "@emotion/styled"
import { Pagination } from "antd"
import { useRouter } from "next/router"
import { API_IP } from '../../../common/utils/ApiIp'

export default function ProductList() {
  const [data, setData] = useState([])
  // console.log('data : ', data)
  const [pagination, setPagination] = useState(1)
  const [message, setMessage] = useState('')
  const [CountList, setCountList] = useState()

  // title State
  const [title, setTitle] = useState('')

  const router = useRouter()
  console.log(router.query.url_query)
  const URL = router.query.url_query
  const URL_HANDLER = URL?.split('&') ?? []
  const MAIN_CATEGORY = URL_HANDLER[0]?.split('=') ?? ''
  const COLOR = URL_HANDLER[1]?.split('=') ?? ''
  const ITEM = URL_HANDLER[2]?.split('=') ?? ''
  const SORT = URL_HANDLER[3]?.split('=') ?? ''
  const SUB = URL_HANDLER[4]?.split('=') ?? ''
  const SEARCH = URL_HANDLER[5]?.split('=') ?? ''


  // title handler function
  const titleHandler = () => {
    if (MAIN_CATEGORY[1] === '1') {
      setTitle('ALL')
    }
    if (MAIN_CATEGORY[1] === '2') {
      setTitle('WOMEN')
    }
    if (MAIN_CATEGORY[1] === '3') {
      setTitle('MEN')
    }
    if (MAIN_CATEGORY[1] === '4') {
      setTitle('KIDS')
    }
  }

  // const router = useRouter()

  useEffect(() => {
    axios
      .get(`http://${API_IP}:3000/product/list?offset=${pagination}&mainCategory=${MAIN_CATEGORY[1] ? MAIN_CATEGORY[1] : ''}&color=${COLOR[1] ? COLOR[1] : ''}&item=${ITEM[1] ? ITEM[1] : ''}&sort=${SORT[1] ? SORT[1] : null}&subCategory=${SUB[1] ? SUB[1] : ''}&name=${SEARCH[1] ? SEARCH[1] : ''}`, {
        headers: {
          'authorization': localStorage.getItem('access_token')
        }
      })
      .then((res) => {
        console.log('response : ', res)
        setData(res.data.result)
        setCountList(res.data.productsCountList)
      })
      .catch((error) =>
        console.log(error)
      )
    titleHandler()
  }, [URL, pagination, message])


  // useEffect(() => {
  //   axios.get("/data/prolist.json").then((res) => {
  //     setData(res.data.result)
  //   })
  // }, [])

  // useEffect(() => {
  //   axios
  //     .get("http://172.30.1.47:3000/product/list?offset=1&sort=best")
  //     .then((res) => {
  //       setData(res.data.result)
  //     })
  // }, [])

  // const getData = async () => {
  //   try {
  //     axios
  //       .get(`http://172.16.100.78:3000/product/list?offset=1&user=1`)
  //       .then((res) => {
  //         console.log(res)
  //         setData(res.data.result)
  //       })
  //   } catch (error) {
  //     console.log(error)
  //   }


  // const [countIndex, setCountIndex] = useState()
  // const handleOnClick = (e, idx) => {
  //   setCountIndex(idx)
  // }

  const [wish, setWish] = useState([])
  // console.log(wish)

  const wishHandler = async (id, productId) => {
    try {
      if (!wish.includes(productId)) {
        setMessage('')
        setWish(wish.concat(productId))
        await axios.post(`http://${API_IP}:3000/like`, {
          productId: id,
        }, {
          headers: {
            "authorization": `${localStorage.getItem('access_token')}`
          }
        })
          .then(res => {
            const { data } = res
            if (data) {
              setMessage(data)
            }
          })
      }
      if (wish.includes(productId)) {
        setMessage('')
        setWish(wish.filter((el) => productId !== el))
        await axios.post(`http://${API_IP}:3000/like`, {
          productId: id,
        }, {
          headers: {
            "authorization": `${localStorage.getItem('access_token')}`
          }
        })
          .then(res => {
            const { data } = res
            if (data.message) {
              console.log(data.message)
              setMessage(data.message)
            }
          })
      }
    } catch (error) {
      console.log(error)
    }
  }

  // menu option function[]

  const optionBox = []
  const size = []
  const optionTotal = []
  const optionFn = data?.forEach((el) =>
    el.color.map((item) => {
      optionBox.push(`(${item.colorId})${item.colorName} / Size : `)
      item?.size?.forEach((element) => size.push(element.sizeName))
    })
  )
  for (let i = 0; i < optionBox.length; i++) {
    optionTotal.push(optionBox[i] + size[i])
  }

  // const onClickBest = (e) => {}
  // 상품명 정렬
  // const nameSort = () => {
  //   const nameSorting = [...data]
  //   const nameCompare = (key) => (a, b) => {
  //     return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
  //   }
  //   nameSorting.sort(nameCompare("name"))
  //   setData(nameSorting)
  // }

  // 낮은 가격순 정렬
  // const lowPriceSort = () => {
  //   const priceSorting = [...data]
  //   const priceCompare = (key) => (a, b) => {
  //     return a[key] - b[key]
  //   }
  //   priceSorting.sort(priceCompare("price"))
  //   setData(priceSorting)
  // }
  // 높은 가격순 정렬
  // const highPriceSort = () => {
  //   const priceSorting = [...data]
  //   const priceCompare = (key) => (a, b) => {
  //     return b[key] - a[key]
  //   }
  //   priceSorting.sort(priceCompare("price"))
  //   setData(priceSorting)
  // }

  // 신상품 정렬
  // const newItemSort = () => {
  //   const newItemSorting = [...data]
  //   const newItemCompare = (key) => (a, b) => {
  //     return b[key] - a[key]
  //   }
  //   newItemSorting.sort(newItemCompare("id"))
  //   setData(newItemSorting)
  // }

  // 좋아요 정렬
  // const likeSort = () => {
  //   const likeSorting = [...data]
  //   const likeCompare = (key) => (a, b) => {
  //     return b[key] - a[key]
  //   }
  //   likeSorting.sort(likeCompare("likeCount"))
  //   setData(likeSorting)
  // }

  // 사용후기 정렬
  // const reviewSort = () => {
  //   const reviewSorting = [...data]
  //   const reviewCompare = (key) => (a, b) => {
  //     return b[key] - a[key]
  //   }
  //   reviewSorting.sort(reviewCompare("reviewCount"))
  //   setData(reviewSorting)
  // }

  // 인기순 정렬
  // const orderSorting = () => {
  //   const orderSorting = [...data]
  //   const orderCompare = (key) => (a, b) => {
  //     return b[key] - a[key]
  //   }
  //   orderSorting.sort(orderCompare("orderCount"))
  //   setData(orderSorting)
  // }

  return (
    <ProductListWrapper>
      <ProductListBox>
        <MenuTitle>{title}</MenuTitle>
        <Category>
          <MenuCategoryBox>
            <MenuCategoryList
              onClick={() => router.push(`/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${COLOR[1]}&item=${ITEM[1]}&sort=${`new`}&subCategory=${SUB[1]}&name=${SEARCH[1]}`)}
            >
              신상품
            </MenuCategoryList>
            <MenuCategoryList
              onClick={() => router.push(`/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${COLOR[1]}&item=${ITEM[1]}&sort=${`name`}&subCategory=${SUB[1]}&name=${SEARCH[1]}`)}
            >
              상품명
            </MenuCategoryList>
            <MenuCategoryList
              onClick={() => router.push(`/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${COLOR[1]}&item=${ITEM[1]}&sort=${`low`}&subCategory=${SUB[1]}&name=${SEARCH[1]}`)}
            >
              낮은가격
            </MenuCategoryList>
            <MenuCategoryList
              onClick={() => router.push(`/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${COLOR[1]}&item=${ITEM[1]}&sort=${`high`}&subCategory=${SUB[1]}&name=${SEARCH[1]}`)}
            >
              높은가격
            </MenuCategoryList>
            <MenuCategoryList
              onClick={() => router.push(`/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${COLOR[1]}&item=${ITEM[1]}&sort=${`best`}&subCategory=${SUB[1]}&name=${SEARCH[1]}`)}
            >
              인기상품
            </MenuCategoryList>
            <MenuCategoryList
              onClick={() => router.push(`/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${COLOR[1]}&item=${ITEM[1]}&sort=${`review`}&subCategory=${SUB[1]}&name=${SEARCH[1]}`)}
            >
              사용후기
            </MenuCategoryList>
            <MenuCategoryList
              onClick={() => router.push(`/productlist/mainCategory=${MAIN_CATEGORY[1]}&color=${COLOR[1]}&item=${ITEM[1]}&sort=${`like`}&subCategory=${SUB[1]}&name=${SEARCH[1]}`)}
            >
              좋아요
            </MenuCategoryList>
          </MenuCategoryBox>
          <ItemNumber>{CountList?.count} Items</ItemNumber>
        </Category>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "980px",
            flexWrap: "wrap",
          }}
        >
          {data.map((el, idx) => (
            <div
              key={el.id}
              style={{ margin: "10px" }}
            >
              <ProductItem
                imgWidth="280px"
                imgHeight="400px"
                menuWidth="200px"
                bottom="403px"
                imgUrl={el.thumbnail}
                data={optionTotal}
                productId={el.id}
              />
              <ItemDescription>
                <ItemTitle>
                  <ItemName>{el.name}</ItemName>
                  <HeartButton onClick={() => wishHandler(el.id, el.productId)}>
                    {el.likeId?.length > 0 ? (
                      <HeartFilled style={{ color: "red" }} />
                    ) : (
                      <HeartOutlined />
                    )}
                  </HeartButton>
                </ItemTitle>

                <ItemPrice>{el.price}</ItemPrice>
                <ColorDisplay>
                  {el.color?.map((el) => (
                    <Color
                      color={el.colorName}
                      key={el.id}
                    ></Color>
                  ))}
                </ColorDisplay>

                <Review key={el.id}>
                  {el.reviewCount === null
                    ? "리뷰 0건"
                    : `리뷰 ${el.reviewCount}건`}
                </Review>
              </ItemDescription>
            </div>
          ))}
        </div>
      </ProductListBox>

      <Pagination
        defaultCurrent={1}
        total={50}
        style={{
          marginBottom: "80px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
        onChange={(num) => setPagination(num)}
      />
    </ProductListWrapper>
  )
}
export const ProductListWrapper = styled.div`
  float: right;
  font-family: "Poppins", "Noto Sans KR", Verdana, Dotum, AppleGothic,
    sans-serif;
  width: 100%;
  margin-top: 100px;
`
export const ProductListBox = styled.div`
  float: right;
`
export const MenuTitle = styled.div`
  margin: 15px;
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  color: #1a1a1a;
`

export const Category = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #e5e5e5;
  width: 878px;
  margin-left: 10px;
  margin-bottom: 35px;
`

export const MenuCategoryBox = styled.ul`
  display: flex;
  width: 76%;
  float: left;
  padding: 10px;
`
export const MenuCategoryList = styled.li`
  font-size: 12px;
  font-weight: 400;
  color: #707070;
  margin-right: 20px;
  cursor: pointer;
`

export const ItemNumber = styled.div`
  /* width: 50%; */
  font-size: 12px;
  color: #707070;
  border-left: 1px solid #e5e5e5;

  margin-left: 35px;
  padding: 10px;
`

export const Review = styled.div`
  font-size: 10px;
  color: #9a9a9a;
  margin-top: 10px;
`
export const ItemDescription = styled.div`
  padding: 20px 0;
`
export const ItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ItemName = styled.div`
  font-size: 12px;
  color: #1a1a1a;
  font-family: "Poppins", "Noto Sans KR", Verdana, Dotum, AppleGothic,
    sans-serif;
  cursor: pointer;
`

export const ItemPrice = styled.div`
  font-size: 15px;
  font-weight: 500;
`
export const ColorDisplay = styled.div`
  display: flex;
`
export const Color = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  margin: 12px 0 0;
  margin-right: 3px;
`

export const HeartButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`
