import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

import { User } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';

type Props = {
  item?: string;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title='Error | Japanese RPG'>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item} | Japanese RPG`}>
      <h1>{item}</h1>
      <a href={'https://jisho.org/api/v1/search/words?keyword=' + item} target='_blank'>
        Jisho
      </a>
    </Layout>
  );
};

export default StaticPropsDetail;

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Get the paths we want to pre-render based on users
//   const paths = sampleUserData.map((user) => ({
//     params: { id: user.id.toString() },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const id = params?.id
//     const item = sampleUserData.find((data) => data.id === Number(id))
//     // By returning { props: item }, the StaticPropsDetail component
//     // will receive `item` as a prop at build time
//     return { props: { item } }
//   } catch (err: any) {
//     return { props: { errors: err.message } }
//   }
// }

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    console.log('params: ', params);
    const id = params?.id;
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item: id } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
