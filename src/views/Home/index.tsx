import React from 'react';
// import { PageHeader } from '../../components'
import { Background, CustomizedGrid, CustomizedCard } from './styles';

export const Home = () => {
  return (
    <Background>
      <CustomizedGrid>
        <CustomizedGrid>
          <CustomizedCard>
            {/* <PageHeader /> */}
          </CustomizedCard>
        </CustomizedGrid>
      </CustomizedGrid>
    </Background>
  );
}

// export default Home;