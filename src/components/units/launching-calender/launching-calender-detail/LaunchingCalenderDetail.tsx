import axios from 'axios'
import { useEffect, useState } from 'react'
import * as S from './LaunchingCalenderDetail.style'
import { LikeOutlined, HeartTwoTone } from '@ant-design/icons'
import { useRouter } from 'next/router'

interface ICalenderDetailDataType {
    id: number
    title: string
    content: string
    image: string
    likeCounting: number
}


const LaunchingCalenderDetail = () => {
    const [detailData, setDetailData] = useState<ICalenderDetailDataType[]>([])
    const [message, setMessage] = useState([])
    const router = useRouter()

    const CalenderDetailData = async () => {
        try {
            await axios.get('/data/calenderDetail.json')
                .then(res => {
                    const { data } = res
                    setDetailData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        CalenderDetailData()
    }, [message])



    const CountUp = async () => {
        try {
            await axios.post('api', {
                id: router.query.calenderId
            })
                .then(res => {
                    const { data } = res
                    setMessage(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <S.OutContain>
            <S.OutTitle>
                LAUNCHING CALENDAR
            </S.OutTitle>
            <S.SubTitle
                onClick={async () => await router.push('/launching-calender')}
            >
                런칭 캘린더
            </S.SubTitle>
            {
                detailData.map(el =>
                    <S.Contain key={el.id} backImg={el.image}>
                        <S.ContainBox>
                            <S.Title>{el.title}</S.Title>
                            <S.Content>{el.content}</S.Content>
                            <S.SubContent>{el.content}</S.SubContent>
                            <S.LikeContain>
                                <S.LikeBox
                                    onClick={CountUp}
                                >
                                    <LikeOutlined style={{ fontSize: "20px" }} />
                                    <S.Like>Like</S.Like>
                                </S.LikeBox>
                                <S.CountBox>
                                    <HeartTwoTone style={{ fontSize: "20px" }} />
                                    <S.Count>{el.likeCounting}</S.Count>
                                </S.CountBox>
                            </S.LikeContain>
                        </S.ContainBox>
                    </S.Contain>
                )
            }
        </S.OutContain>
    )
}

export default LaunchingCalenderDetail