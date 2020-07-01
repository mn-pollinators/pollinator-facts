import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from '@material-ui/core/Grid';
import SmallFactCard from "../components/small-fact-card"

const useStyles = makeStyles({
  factCard: {
    width: '190px',
    margin: '10px',
  }
});

export default function GridView({ edges }) {
  const gridStyles = useStyles();
  return (
    <Grid container flexwrap="wrap" direction="row" spacing={1} >
      {edges.map(({ node }) => (
            <SmallFactCard
              key={node.id}
              className={gridStyles.factCard}
              slug={node.fields.slug}
              title={node.frontmatter.title}
              image={node.frontmatter.image}
            />
          ))}
    </Grid>
  )
}
