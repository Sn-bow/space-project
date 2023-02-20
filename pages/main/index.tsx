import CarouselFadeExample from "../../src/components/units/main/mainCarousel/MainCarousel"
import "bootstrap/dist/css/bootstrap.min.css"
import MainWeeklyBest from "../../src/components/units/main/mainWeeklyBest/MainWeeklyBest"
import MainNew from "../../src/components/units/main/mainNew/MainNew"
import MainPhotoReview from "../../src/components/units/main/mainPhotoReview/MainPhotoReview"
import MainLookBook from "../../src/components/units/main/mainLookBook/MainLookBook"
import MainSnap from "../../src/components/units/main/mainSnap/MainSnap"

export default function MainPage() {
  return (
    <>
      <CarouselFadeExample />
      <MainWeeklyBest />
      <MainNew />
      <MainPhotoReview />
      <MainLookBook />
      <MainSnap />
    </>
  )
}
