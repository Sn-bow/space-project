import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from "./LaunchingCalenderList.style"

interface ILaunchingCalenderListDataType {
    id: number
    title: string
    thumbnail: string
    created_at: string
}

const LaunchingCalenderList = () => {
    const [lanchingCalenderData, setLanchingCalenderData] = useState<ILaunchingCalenderListDataType[]>([])
    const router = useRouter()

    const lanchingCalenderDataHandler = async () => {
        try {
            await axios.get('/data/calender.json')
                .then(res => {
                    const { data } = res
                    setLanchingCalenderData(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        lanchingCalenderDataHandler()
    }, [])

    return (
        <S.Contain>
            <S.Title>
                LAUNCHING CALENDAR
            </S.Title>
            <S.SubTitle>
                런칭 캘린더
            </S.SubTitle>
            <S.ItemContain>
                {
                    lanchingCalenderData.map(el =>
                        <S.ItemBox
                            key={el.id}
                            onClick={async () => await router.push(`/LAUNCHING_CALENDER/detail/${el.id}`)}
                        >
                            <S.CalenderImg src={el.thumbnail} alt={el.title} />
                            <S.Date>{el.created_at}</S.Date>
                            <div>{el.title}</div>
                        </S.ItemBox>
                    )
                }
            </S.ItemContain>
        </S.Contain>
    )
}

export default LaunchingCalenderList