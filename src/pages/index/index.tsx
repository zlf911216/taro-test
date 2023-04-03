import { FC, useEffect } from "react";
import { ScrollView } from "@tarojs/components";
import { useAppSelector, useAppDispatch, userActions } from "@hooks/store";

import "./index.scss";

const Home: FC = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const dispatch = useAppDispatch();

  dispatch(userActions.setUserInfo({ id: "ss" }));

  return (
    <ScrollView
      className="index-page common-contain-page"
      scrollY
      scrollWithAnimation
    >
      111
    </ScrollView>
  );
};

export default Home;
