import Link from '../../components/UI/Link/Link';

import {
  FoundContainerStyle,
  FoundSubtitleStyle,
  FoundTextStyle,
  FoundTitleStyle,
  ErrorImgStyle,
} from './PageNotFoundStyles';

const PageNotFound = () => {
  return (
    <div>
      <FoundContainerStyle>
        <FoundTextStyle>
          <FoundTitleStyle>404 Error</FoundTitleStyle>
          <FoundSubtitleStyle>Gokuuuuuuuuuu!</FoundSubtitleStyle>
          <p>It seems that the page you are looking for does not exist or was removed</p>
          <Link />
        </FoundTextStyle>
        <ErrorImgStyle>
        <img
          src='/Krillin.gif'
          alt=''
          className='error'
        />
        </ErrorImgStyle>
      </FoundContainerStyle>
    </div>
  );
};

export default PageNotFound;
