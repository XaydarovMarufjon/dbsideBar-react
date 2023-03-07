import React from 'react';
import Page_1_1 from '../db_1-5/Page_1_1';
import Page_1_2 from '../db_1-5/Page_1_2';
import Page_1_3 from '../db_1-5/Page_1_3';
import Page_1_4 from '../db_1-5/Page_1_4';
import Page_1_5 from '../db_1-5/Page_1_5';
import Page_2_1 from '../db_6-7/Page_2_1';
import Page_2_2 from '../db_6-7/Page_2_2';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
     <Page_1_1 /> <hr />
     <Page_1_2 /> <hr />
     <Page_1_3 /> <hr />
     <Page_1_4 /> <hr />
     <Page_1_5 /> <hr />
     <Page_2_1 /> <hr />
     <Page_2_2 /> <hr />
    </>
  );
};

export default HomePage;