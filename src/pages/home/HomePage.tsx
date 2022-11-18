import {Column}   from "../../components/column/Column";
import {Skeleton} from "../../components/skeleton/Skeleton";
import styles     from "./HomePage.module.sass";
import {Grid}     from "../../components/grid/Grid";

const HomePage = () => {
  return (
      <Column id="home-page" className={styles.container}>
        <Skeleton height={223} className={styles.header}>
          Chez vous, partout et ailleurs
        </Skeleton>

        <Grid component={Skeleton} width="100%" className={styles.locationCards} areasTemplate={[
            "card card card",
        ]}>
          {(new Array(6).fill(null).map((_, index) => (
              <Column key={index} component={Skeleton} style={{flexGrow: 1}} className={styles.locationCard}>
                Titre de la location
              </Column>
          )))}
        </Grid>
      </Column>
  );
};

export default HomePage;
