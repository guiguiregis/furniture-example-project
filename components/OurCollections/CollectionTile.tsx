import React, { FC } from 'react';
import {
  CollectionTileContainer,
  CollectionTileDescription,
  CollectionTileImage,
  CollectionTileImageContainer,
  CollectionTileTextContainer,
  CollectionTileTitle,
  OutdoorTag,
} from './styles';

interface CollectionTileProps {
  title: string;
  description: string;
  image: string;
  url?: string;
}

const CollectionTile: FC<{
  collection?: CollectionTileProps;
  inverse?: boolean;
}> = ({ collection, inverse }) => {
  return (
    <CollectionTileContainer inverse={inverse}>
      <CollectionTileImageContainer>
        <CollectionTileImage
          src={collection?.image || '/images/tile.svg'}
          alt={collection?.title || ''}
          fill
          inverse={inverse}
        />
        {collection?.title?.toLowerCase()?.includes('mistral') && (
          <OutdoorTag>OUTDOOR</OutdoorTag>
        )}
      </CollectionTileImageContainer>
      <CollectionTileTextContainer inverse={inverse}>
        <CollectionTileTitle>{collection?.title}</CollectionTileTitle>
        <CollectionTileDescription>
          {collection?.description}
        </CollectionTileDescription>
      </CollectionTileTextContainer>
    </CollectionTileContainer>
  );
};

export default CollectionTile;
