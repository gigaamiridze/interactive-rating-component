export type RatingProps = {
  rating: number | null,
  setRating: React.Dispatch<React.SetStateAction<number | null>>,
  setShowThankYouPage: React.Dispatch<React.SetStateAction<boolean>>
}

export type ActiveRatingsTypes = {
  oneStar: boolean,
  twoStars: boolean,
  threeStars: boolean,
  fourStars: boolean,
  fiveStars: boolean,
}