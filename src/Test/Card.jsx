import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from "reactstrap"

export default () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">
            Card title
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
        </CardBody>
        <img
          alt="Card image cap"
          src="https://thiscatdoesnotexist.com"
          width="100%"
        />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardText>
          <CardLink href="#">
            Card Link
          </CardLink>
          <CardLink href="#">
            Another Link
          </CardLink>
        </CardBody>
      </Card>
    </div>
  )
}