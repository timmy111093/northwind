import React, { FC } from 'react';
import styles from './PageNotFound.module.scss';

interface PageNotFoundProps {}

const PageNotFound: FC<PageNotFoundProps> = () => (
  <div className={styles.PageNotFound}>
    <p>The page you are looikng for does not exist</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/C-EHoNfkoDM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
  </div>
);

export default PageNotFound;
