import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="200"
      width="200"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{
        marginTop: 100,
        marginLeft: 400,
      }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};
