import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from "axios"
import * as S from "./MainNewCarousel.styles"
import { API_IP } from "../../../../../common/utils/ApiIp"
import { IMainNewProduct } from "./MainNewCarousel.types"
export default function PauseOnHover() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: (
      <button
        type="button"
        className="slick-prev"
      >
        Previous
      </button>
    ),
    nextArrow: (
      <button
        type="button"
        className="slick-next"
      >
        Next
      </button>
    ),
  }

  const [data, setData] = useState<IMainNewProduct[]>([])

  // useEffect(() => {
  //   axios.get("/data/mainNewProduct.json").then((res) => {
  //     setData(res.data)
  //   })
  // }, [])
  // console.log(data)

  useEffect(() => {
    axios.get(`http://${API_IP}:3000/product/new`).then((res) => {
      setData(res.data)
    })
  }, [])

  // const optionBox = []
  // const size = []
  // const optionTotal = []
  // const optionFn = data?.forEach((el) =>
  //   el.stockCheck?.map((item) => {
  //     optionBox.push(`(${item.colorId})${item.colorName} / Size : `)
  //     item?.opt?.forEach((element) => size.push(element.sizeName))
  //   })
  // )
  // for (let i = 0; i < optionBox.length; i++) {
  //   optionTotal.push(optionBox[i] + size[i])
  // }

  return (
    <S.Container>
      <Slider {...settings}>
        {data.map((el) => (
          <S.NewProductWrapper key={el.id}>
            <img
              src={el.thumbnail}
              alt={el.thumbnail}
              style={{ width: "200px", height: "300px" }}
            />
            <S.DescriptionWrapper>
              <S.TitleTop>
                <S.ItemName>{el.name}</S.ItemName>
              </S.TitleTop>
              <S.Price>{el.price}</S.Price>
              <S.ColorBox>
                {el.productColor?.map((el, idx) => (
                  <S.Color
                    key={idx}
                    color={el}
                  ></S.Color>
                ))}
              </S.ColorBox>
              <S.Review>리뷰 {el.review}건</S.Review>
            </S.DescriptionWrapper>
          </S.NewProductWrapper>
        ))}
      </Slider>
    </S.Container>
  )
}
