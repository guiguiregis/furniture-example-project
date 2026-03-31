import React, { FC, Fragment } from 'react';
import {
  OurCollectionsContainer,
  OurCollectionsTilesContainer,
} from './styles';
import { SectionTitle } from '../Section/styles';
import CollectionTile from './CollectionTile';

interface CollectionTileProps {
  title: string;
  description: string;
  image: string;
  url?: string;
}

const OurCollections: FC<{
  title: string;
  collections: CollectionTileProps[];
}> = ({ title, collections }) => {
  return (
    <OurCollectionsContainer>
      <SectionTitle>{title}</SectionTitle>
      <OurCollectionsTilesContainer>
        {collections.map((collection, index) => (
          <Fragment key={collection.title}>
            <CollectionTile collection={collection} inverse={index % 2 === 0} />
          </Fragment>
        ))}
      </OurCollectionsTilesContainer>
    </OurCollectionsContainer>
  );
};

export default OurCollections;
