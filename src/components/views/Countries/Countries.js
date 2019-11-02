import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../layout/Section/Section';
import CountrySummary from '../../features/CountrySummary/CountrySummary';
import PageTitle from '../../common/PageTitle/PageTitle';
import {Grid, Row} from 'react-flexbox-grid';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
const Countries = ({countries}) => (
  <Section>
    <Grid>
      <PageTitle text='All countries' />
      <Row between="md">
        {Object.keys(countries).map(code => (
          <CountrySummary key={code} {...countries[code]} />
        ))}
        <BrowserRouter>
          <Switch location={location}>
            <Route exact path='/countries/:code' component={Countries} />
          </Switch>
        </BrowserRouter>
      </Row>
    </Grid>
  </Section>
);

Countries.propTypes = {
  countries: PropTypes.objectOf(PropTypes.object),
};

export default Countries;
