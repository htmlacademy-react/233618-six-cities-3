import type { FullOffer } from '../../types/offers';

type OfferGalleryProps = {
  offer: FullOffer;
};

function OfferGallery({ offer }: OfferGalleryProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {offer.images.map((src) => (
          <div className="offer__image-wrapper" key={`${offer.id}-${src}`}>
            <img
              className="offer__image"
              src={src}
              alt={`${offer.type} photo`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
