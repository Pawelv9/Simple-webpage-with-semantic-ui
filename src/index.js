import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail author="Sam" timeAgo="Today at 4:45AM" content="Nice post" avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Alex" timeAgo="Yesterday at 10:45AM" content="Good post" avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Jane" timeAgo="Tomorrow at 11:35PM" content="Great post" avatar={faker.image.avatar()} />
        </ApprovalCard>
      </div>;
};



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
