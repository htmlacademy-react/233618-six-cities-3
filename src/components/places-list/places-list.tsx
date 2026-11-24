import PlaceCard from '../place-card/place-card';
import type { Offer } from '../../types/offers';
import cn from 'classnames';

type PlacesListProps = {
  offers: Offer[];
  onOfferHover?: (offer: Offer) => void;
  isNearPlacesList: boolean;
};

function PlacesList({
  offers,
  onOfferHover,
  isNearPlacesList,
}: PlacesListProps) {
  const mouseEnterHandler = (offer: Offer) => {
    if (isNearPlacesList || !onOfferHover) {
      return;
    }

    onOfferHover(offer);
  };

  const prefix = isNearPlacesList ? 'near-places' : 'cities';

  return (
    <div
      className={cn(
        'places__list',
        { 'near-places__list': isNearPlacesList },
        { 'cities__places-list tabs__content': !isNearPlacesList },
      )}
    >
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => mouseEnterHandler(offer)}
          classNamePrefix={prefix}
        />
      ))}
    </div>
  );
}

export default PlacesList;
