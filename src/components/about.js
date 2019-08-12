import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Nguyễn Trường Giang</h1>
          <p className="lead">Mình đang học tập tại Học Viện Công Nghệ Bưu Chính Viễn Thông cở sở tại Tp. Hồ Chí Minh. Website này là phần demo thực hành  cho báo cáo thực tập của mình.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;