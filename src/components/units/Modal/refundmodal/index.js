import styled from "@emotion/styled"

export default function RefundModal(props) {
  return (
    <div>
      <RefundWrapper>
        {props.isRefundModal ? (
          <div>
            <RefundTitleTop>
              <RefundTilte>취소/반품/교환/환불 안내</RefundTilte>
              <RufundTitleButton onClick={props.close}>
                <img src="https://spao.com/morenvyimg/top_search_close.png" />
              </RufundTitleButton>
            </RefundTitleTop>
            <NoticeWrapper>
              <StoreNotice>
                <p>※ 매장픽업</p>
                ◎ 픽업상품 보관 기간
                <br /> - 매장 보관기간은 결제일 기준 +4 일까지 보관이 가능하고
                +5 일째 자동 반품 처리 예 월요일 결제하면 토요일에 반품처리
                <br /> ◎ 픽업 매장 변경
                <br /> -매장 픽업 매장 변경은 어려우며 , 결제 취소 후 매장을
                다시 지정하여 재결재 하셔야 합니다
                <br /> ◎ 고객 주문 취소
                <br /> - 마이페이지 주문상태에서 해당건이 상품 준비중 ’ 단계는
                취소 가능하지만 , 포장완료 ’ 단계이면 취소 불가능합니다 -
                부분취소는 불가하며 전체취소만 가능하며 , 전체취소 후 취소
                철회는 불가능합니다 <br />◎ 교환
                <br /> - 매장픽업으로 주문한 건은 교환이 불가능하며 픽업하신
                매장에서 반품 하신 후 구매해 주시길 바랍니다 ※ 단 , 온라인몰의
                가격과 매장의 가격이 다를 수 있으니 참조해 주시길 바랍니다 .
                <br /> ◎ 반품 <br />- 반품기간은 매장에서 픽업한 후 7 일 이내
                가능하며 , 반드시 픽업한 매장에서만 가능합니다
                <br /> - 부분반품은 불가능하며 , 매장에서 전체반품 후 구매해
                주시길 바랍니다.
              </StoreNotice>
              <NoticeBox>
                ※공지사항※ <br />
                현재 시스템 점검 중으로 픽업 서비스는 임시 중단된 상황입니다.
                <br />
                이용 시 참고 부탁 드립니다. 감사합니다.
              </NoticeBox>
              <NomalShip>※ 일반 택배 배송</NomalShip>
              <div>
                <Cancel>주문 취소</Cancel> 주문취소는 입금대기/입금완료에서
                가능합니다.
                <br />
                가구 등 주문제작상품의 경우에는 상품준비중 단계부터 불가능하며
                상품 수령 후, 반품 신청을 하실 수 있습니다.
              </div>
              <ShippingFee>
                <p>반품/교환 배송비 안내</p> 2,500원 예상 (편도기준) (배송
                프로모션 진행 시 프로모션 상황에 따라서 변경이 될 수 있습니다.)
                반품/교환 배송비는 고객 변심의 경우에만 발생됩니다. 구매 후
                반품/교환 시 예상금액과 차이가 있을 수 있습니다.
              </ShippingFee>
              <ReturnNotice>
                <p>반품/교환안내</p> 반품/교환은 상품 수령일 7일 이내에
                신청해주셔야 하며, 단순 고객변심으로 인한 왕복 배송비는
                고객님께서 부담하셔야 합니다. <br />
                표시광고와 상이하여 상품에 하자가 있는 경우 상품수령 후 3개월
                이내, 해당사실을 안(알 수 있었던)날로부터 30일 이내에
                교환/반품을 신청을 할 수 있습니다.
                <br />
                반품/교환 시 제품 원형 그대로 보내 주셔야 가능 합니다.
                <br />
                <span>
                  교환의 경우에는 동일 상품에 대해서 컬러/사이즈 교환은
                  가능하나, 타 상품 교환을 원하실 때에는 반품 접수 및 신규
                  주문으로 진행이 됩니다.
                </span>
                <br />
                반품/교환은 꼭 승인 과정을 거쳐서 진행해주세요.
                <br /> 신청/승인 과정 없이 고객님께서 직접 제품을 보내실 경우
                택배사에서 추가 배송비를 요구할 수 있습니다.
                <br /> 정해진 반품장소가 아닌 곳으로 보내질 경우 수취거부로 인해
                왕복 배송비가 부과될 수 있습니다.
              </ReturnNotice>
              <NonExchange>
                <p>반품/교환 불가 안내</p> 고객님이 상품 포장을 개봉하여 사용
                또는 설치 완료되어 상품의 가치가 훼손된 경우
                <br /> (단, 내용 확인을 위한 포장 개봉의 경우는 예외,
                가전/디지털 미개봉 새 상품은 개봉 및 설치 후 기능 상 하자가 아닌
                단순변심으로 인한 반품은 불가합니다.) <br />
                고객님의 단순변심으로 인한 교환/반품 신청이 상품 수령한 날로부터
                7일이 경과한 경우
                <br /> 고객님의 사용 또는 일부 소비에 의해 상품의 가치가 훼손된
                경우
                <br /> 시간 경과에 따라 재판매가 어려운 상품 등의 가치가 현저히
                감소한 경우
                <br /> (신선식품의 경우 선도저하 및 상품불량일 경우 수령일로부터
                1~2일 내 교환/반품 신청)
                <br /> 복제가 가능한 재화 등의 포장을 훼손한 경우(포장인증된
                전자제품, DVD,CD 도서 등 복제 가능한 상품)
                <br /> 배송된 상품이 하자 없음을 확인한 후 설치가 완료된 상품의
                경우(가전,가구,헬스기구 등)
                <br /> 고객님의 요청에 따라 개별적으로 주문제작되는 상품의
                경우(수제화, 귀금속 등)
                <br />
                구매한 상품의 구성품이 누락된 경우(화장품 세트, 의류부착
                악세서리, 가전제품 부속품,사은품 등)
                <br /> 기타,상품의 교환, 환불 및 상품 결함 등의 보상은
                재정경제부고시,소비자피해보상규정에 의함
                <br /> (단, 온라인 단독 상품의 경우 오프라인 매장 교환이
                불가합니다.)
              </NonExchange>
            </NoticeWrapper>
          </div>
        ) : null}
      </RefundWrapper>
    </div>
  )
}
export const RefundWrapper = styled.div`
  position: fixed;
  left: 179px;
  top: 122px;
  z-index: 9999;
  opacity: 1;
  padding: 0 50px 50px 50px;
  width: 500px;
  height: 400px;
  overflow: scroll;
  background-color: #fff;
`
export const RefundTitleTop = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 60px;
  line-height: 80px;
  border-bottom: 1px solid #e5e5e5;
  font-weight: 500;
`
export const RefundTilte = styled.div`
  font-size: 18px;
`
export const RufundTitleButton = styled.button`
  background-color: transparent;
  border: none;

  img {
    width: 10px;
    cursor: pointer;
  }
`
export const NoticeWrapper = styled.div`
  font-size: 10px;
  line-height: 20px;
  position: relative;
  top: 0;
  left: 0;
  margin-top: 30px;
  color: #1a1a1a;
`
export const StoreNotice = styled.div`
  color: rgb(51, 51, 51);
  font-weight: bold;

  p {
    color: rgb(255, 0, 0);
    font-weight: bold;
  }
`
export const NoticeBox = styled.div`
  margin-top: 25px;
  color: rgb(255, 0, 0);
  font-weight: bold;
`
export const NomalShip = styled.div`
  color: rgb(255, 0, 0);
  font-weight: bold;
  margin-top: 30px;
`
export const Cancel = styled.div`
  color: rgb(51, 51, 51);
  font-weight: bold;
`
export const ShippingFee = styled.div`
  margin-top: 20px;

  p {
    color: rgb(51, 51, 51);
    font-weight: bold;
  }
`
export const ReturnNotice = styled.div`
  margin-top: 20px;
  p {
    color: rgb(51, 51, 51);
    font-weight: bold;
  }
  span {
    color: rgb(255, 0, 0);
    font-weight: bold;
  }
`
export const NonExchange = styled.div`
  margin-top: 20px;

  p {
    color: rgb(51, 51, 51);
    font-weight: bold;
  }
`
