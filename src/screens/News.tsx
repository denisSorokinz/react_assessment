import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardText,
} from "reactstrap";
import { posts } from "Constants";

const News: React.FC = () => (
    <React.Fragment>
        News
        {posts.map((post) => (
            <Card key={post.id}>
                <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardBody>
                    <CardText>{post.content}</CardText>
                </CardBody>
            </Card>
        ))}
    </React.Fragment>
);

export default News;
