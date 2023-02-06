import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import axios from "axios"
import { StarFilled, RightOutlined, SearchOutlined } from "@ant-design/icons"
import ProductDetailReviewBox from "../productDetail/productDetailReviewBox"

export default function ReviewByProduct() {
  const [data, setData] = useState([])
  const [reviewData, setReviewData] = useState([])
  useEffect(() => {
    axios.get("/data/reviewScore.json").then((res) => {
      setData(res.data)
      //   console.log(data)
    })
  }, [])

  useEffect(() => {
    axios.get("/data/reviewByproduct.json").then((res) => {
      setReviewData(res.data)
      console.log(reviewData)
    })
  }, [])

  const average = data.scoreAvg?.map((el) => el.aa)
  console.log(average)
  const starAvg = Number(average).toFixed(1)
  console.log(starAvg)

  const star = data.scoreCount?.map((el, i) => <div key={el.i}>{el.star}</div>)

  //   console.log(star)

  return (
    <>
      <div style={{ margin: "0 100px" }}>
        <TopWrapper>
          <ReviewTitle>REVIEW</ReviewTitle>
          <TopWrapperRight>
            <AllReview>전체 상품 리뷰 보기</AllReview>
            <Notice>
              공지사항 <span>3</span>
            </Notice>
          </TopWrapperRight>
        </TopWrapper>
        <ConsumerAvg>
          <AverBox>
            <StarFilled
              style={{ fontSize: "30px", color: "#F8E71C", marginTop: "20px" }}
            />
            <StarAverage>
              {data.scoreAvg?.map((el, i) => (
                <div key={el.i}>{Number(el.aa).toFixed(1)}</div>
              ))}
            </StarAverage>
          </AverBox>
          <ConsumerLike>
            <span>99%</span>의 구매자가 이 상품을 좋아합니다.
          </ConsumerLike>
        </ConsumerAvg>
        <PhotoVideoWrapper>
          <PhotoWrapper>
            <Photo>포토&동영상</Photo>
            <AllPhoto>
              전체보기 <RightOutlined />
            </AllPhoto>
          </PhotoWrapper>
          <ImgBox>
            <img
              src="/images/photo.avif"
              style={{
                width: "160px",
                height: "180px",
                objectFit: "cover",
                marginRight: "10px",
              }}
            />
            <img
              src="/images/phototest.avif"
              style={{ width: "160px", height: "180px", objectFit: "cover" }}
            />
          </ImgBox>
        </PhotoVideoWrapper>
        <div>
          <ReviewMenuWrapper>
            <ReviewMenu>
              <ReviewMenuList>추천순</ReviewMenuList>
              <ReviewMenuList>최신순</ReviewMenuList>
              <ReviewMenuList>별점순</ReviewMenuList>
              <ReviewMenuList>
                <ReviewSearchWrapper>
                  <ReviewSearch
                    type="text"
                    placeholder="리뷰 키워드 검색"
                  />
                  <SearchBtn>
                    <SearchOutlined />
                  </SearchBtn>
                </ReviewSearchWrapper>
              </ReviewMenuList>
            </ReviewMenu>
          </ReviewMenuWrapper>
          <div>
            <div style={{ padding: "20px", borderBottom: "1px solid black" }}>
              별점 : 보통이에요
            </div>
          </div>
          <ProductDetailReviewBox
            reviewData={reviewData}
            setReviewData={setReviewData}
            data={data}
            setData={setData}
          />
          <ProductDetailReviewBox
            reviewData={reviewData}
            setReviewData={setReviewData}
            data={data}
            setData={setData}
          />
        </div>
      </div>
    </>
  )
}

export const ReviewTitle = styled.div`
  flex-grow: 1;
  line-height: 30px;
  font-size: 20px;
  color: #14161a;
  font-weight: bold;
  margin-left: 10px;
`
export const TopWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid #14161a;
  padding: 16px 0;
  width: 100%;
  font-size: 12px;
`
export const TopWrapperRight = styled.div`
  display: flex;
`
export const AllReview = styled.div`
  white-space: nowrap;
  font-size: 14px;
  color: #707680;
  padding: 0 12px 16px;
`
export const Notice = styled.span`
  white-space: nowrap;
  font-size: 14px;
  color: #707680;
  padding: 0 12px 16px;
  span {
    font-weight: bold;
  }
`
export const StarAverage = styled.div`
  margin-left: 4px;
  font-size: 28px;
  font-weight: bold;
  line-height: 72px;
  color: #14161a;
  vertical-align: bottom;
`
export const AverBox = styled.div`
  display: flex;
  justify-content: center;
`
export const ConsumerLike = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #14161a;
  span {
    font-weight: bold;
  }
`
export const ConsumerAvg = styled.div`
  width: 399px;
  min-height: 122px;
  border-right: solid 1px #d8dde5;
  padding: 30px 0;
  font-size: 0;
  /* border-bottom: 1px solid #ebeff5; */
`
export const PhotoVideoWrapper = styled.div`
  padding: 32px 0;
  border-top: 1px solid #ebeff5;
  border-bottom: 1px solid #ebeff5;
`
export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Photo = styled.div`
  font-size: 12px;
  line-height: 24px;
  vertical-align: middle;
  text-align: left;
  color: #14161a;
  margin-left: 10px;
`
export const AllPhoto = styled.div`
  cursor: pointer;
  font-size: 12px;
  line-height: 20px;
  padding: 14px 0 14px 14px;
  /* position: absolute; */
  /* top: 20px;
  right: 0; */
  color: #707680;
`
export const ImgBox = styled.div`
  margin: 0 10px;
`
export const ReviewMenuWrapper = styled.div`
  border-bottom: 1px solid #ebeff5;
  display: flex;
  position: relative;
`
export const ReviewMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 10px;
`
export const ReviewMenuList = styled.li`
  cursor: pointer;
  /* display: inline-block; */
  padding: 22px 12px;
  font-size: 14px;
  line-height: 20px;
  color: #bcc2cc;

  &:hover {
    color: #14161a;
    font-weight: bold;
  }
`
export const ReviewSearchWrapper = styled.div`
  display: flex;
  position: relative;
  height: 32px;
  width: 238px;
  border: solid 1px #d8dde5;
  border-radius: 4px;
  left: 600px;
`

export const ReviewSearch = styled.input`
  font-size: 12px;
  color: #14161a;
  line-height: 18px;
  border: none;
  margin: 6px 8px 6px 32px;
  text-overflow: ellipsis;
  outline: none;
`
export const SearchBtn = styled.button`
  position: absolute;
  border-radius: 5px;
  background-color: transparent;
  padding: 6px;
  margin: 1px;
  right: 10px;
  border: none;
  top: 4px;
  cursor: pointer;
`
export const ReviewContainer = styled.div`
  padding: 32px 0;
  border-bottom: 1px solid #d8dde5;
`

export const GoodComment = styled.div`
  margin-top: 5px;
`
export const HelpWrapper = styled.div`
  display: flex;
  margin-right: 4px;
  color: #707680;
`

export const Helpful = styled.span`
  margin: 0 4px;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  color: #707680;
`
export const DisHelp = styled.span`
  margin: 0 4px;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  color: #707680;
`
export const HelpContainer = styled.div`
  padding: 16px 0 16px 4px;
  text-decoration: none;
  cursor: pointer;
  color: #707680;
`

export const DisHelpContainer = styled.div`
  padding: 16px 0 16px 4px;
  text-decoration: none;
  cursor: pointer;
  color: #707680;
`
export const CommentBox = styled.div`
  /* border-left: 1px solid #d8dde5; */

  padding-left: 8px;
  padding: 16px 16px 16px 0;
  color: #707680;
`
export const Commnet = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #707680;
  cursor: pointer;
`
export const CommentCount = styled.span`
  margin-left: 4px;
  margin-right: 4px;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  color: #707680;
  cursor: pointer;
`
