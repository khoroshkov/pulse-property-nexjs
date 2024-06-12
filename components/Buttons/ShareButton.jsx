import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon
} from 'react-share';

const ShareButton = ({ property }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;
  const hashtag = property.type.replace(/\s/g, '');
  return (
    <>
      <h3 className="text-xl font-bold text-center pt-2">Share This Property:</h3>
      <div className="flex gap-3 justify-center pb-5">
        <FacebookShareButton url={shareUrl} quote={property.name} hashtag={`#${hashtag}ForRent`}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} title={property.name} hashtags={[`${hashtag}ForRent`]}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <WhatsappShareButton url={shareUrl} title={property.name} separator=":: ">
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>

        <EmailShareButton
          url={shareUrl}
          subject={property.name}
          body={`Check out this property listing: ${shareUrl}`}>
          <EmailIcon size={40} round />
        </EmailShareButton>
      </div>
    </>
  );
};

export default ShareButton;
