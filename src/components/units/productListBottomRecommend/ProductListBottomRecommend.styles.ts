import styled from "@emotion/styled"
export const ReviewRecommendContainer = styled.div`
  width: 100%;
  padding: 100px 0;
  /* margin-left: 100px; */
`
export const RecommendReviewTitleWrapper = styled.div`
  text-align: center;
`
export const RecommendReviewTitle = styled.div`
  color: #000000;
  font-size: 32px;
  margin-bottom: 30px;
  font-weight: bold;

  /* text-align: center; */
  /* width: 100vw;
  display: table-cell; */
`
export const RecommendItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  line-height: 1.3;
`
export const RecommendItem = styled.div`
  /* margin: 0 10px; */
  margin-right: 16px;
  cursor: pointer;
`
export const RecommendItemImgBox = styled.div`
  position: relative;
  border: 1px solid #e8e8ea;
  border-bottom: none;
`
export const RecommendItemImg = styled.img`
  width: 230px;
  height: 350px;
  object-fit: cover;
`
export const Star = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #ffffff;
  line-height: 16px;
  letter-spacing: -0.5px;
  background-color: ${(props) =>
    props.star === null ? "white" : "rgba(0, 0, 0, 0.8)"};
  border-radius: 4px;
  position: absolute;
  left: 8px;
  padding: 6px 8px;
  top: 10px;
`
export const RecommendItemName = styled.div`
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  font-size: 13px;
  font-weight: normal;
  color: #0d0d0d;
  line-height: 1.3;
  /* letter-spacing: -0.5px; */
  margin-top: 12px;
  margin-bottom: 5px;
`
export const RecommendItemPrice = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #171717;
`
export const RecommendItemInfo = styled.div`
  text-align: left;
  border: 1px solid #e8e8ea;
  padding: 0 16px 20px 16px;
  height: 174px;
`
export const ReviewContent = styled.div`
  font-weight: normal;
  color: #757577;
  font-size: 13px;
  line-height: 18px;
  width: 150px;
  height: 50px;
`
export const ReviewCount = styled.div`
  font-size: 13px;
  font-weight: normal;
  color: #525355;
  line-height: 18px;
  margin-top: 20px;
  span {
    margin-left: 5px;
  }
`
export const InfoBottomWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`
