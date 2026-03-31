import React, { FC } from 'react';
import { BlogPost } from '@/helpers/contentful';
import Colors from '@/constants/colors';
import { useRouter } from 'next/router';
import { IconComponent } from '../Common/Icons/Icon';
import { SectionHeader, SectionTitle } from '../Section/styles';
import {
  CollectionTilesContainer,
  CollectionTileImage,
  CollectionTileImageContainer,
  CollectionTileTextContainer,
  CollectionTileTitle,
  CollectionTileSubheaderContainer,
  CollectionTileLink,
  SVGCollectionCustomizeMobileWrapper,
  SVGCollectionCustomizeWrapper,
  CollectionTileContainer,
} from '../Common/CollectionTile/styles';

const BlogSection: FC<{
  title: string;
  posts: BlogPost[];
}> = ({ title, posts }) => {
  const router = useRouter();

  return (
    <>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
      </SectionHeader>
      <CollectionTilesContainer>
        {posts.map(post => (
          <CollectionTileContainer key={post.handle}>
            <CollectionTileImageContainer
              onClick={() => router.push(`/blog/${post.handle}`)}
            >
              <CollectionTileImage
                src={post.thumbnailImage as string}
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                alt="blog post thumbnail"
              />
            </CollectionTileImageContainer>
            <CollectionTileTextContainer>
              <CollectionTileTitle>{post.title}</CollectionTileTitle>
              <CollectionTileSubheaderContainer>
                <CollectionTileLink
                  onClick={() => {
                    router.push(`/blog/${post.handle}`);
                  }}
                >
                  {post.buttonLink}
                  <SVGCollectionCustomizeWrapper right="-4px" top="1px">
                    <IconComponent
                      name="arrowRight"
                      fill={Colors.COZEY_RUST}
                      fontSize={16}
                    />
                  </SVGCollectionCustomizeWrapper>
                  <SVGCollectionCustomizeMobileWrapper right="-4px">
                    <IconComponent
                      name="arrowRight"
                      fill={Colors.COZEY_RUST}
                      fontSize={14}
                    />
                  </SVGCollectionCustomizeMobileWrapper>
                </CollectionTileLink>
              </CollectionTileSubheaderContainer>
            </CollectionTileTextContainer>
          </CollectionTileContainer>
        ))}
      </CollectionTilesContainer>
    </>
  );
};

export default BlogSection;
