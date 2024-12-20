import { IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <div className={classes("row-layout group")}>
          <IgrNavDrawer position="relative" className={classes("nav-drawer")}>
            <div slot="mini" key={uuid()}>
              <div style={{display: 'contents'}} onClick={() => navigate(`/view1`)} key={uuid()}>
                <IgrNavDrawerItem>
                  <span slot="icon" key={uuid()}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>account_circle</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <div style={{display: 'contents'}} onClick={() => navigate(`/view2`)} key={uuid()}>
                <IgrNavDrawerItem>
                  <span slot="icon" key={uuid()}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>assignment_turned_in</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </span>
                </IgrNavDrawerItem>
              </div>
              <div style={{display: 'contents'}} onClick={() => navigate(`/view3`)} key={uuid()}>
                <IgrNavDrawerItem>
                  <span slot="icon" key={uuid()}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>assessment</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </span>
                </IgrNavDrawerItem>
              </div>
            </div>
            <IgrNavDrawerItem key={uuid()}>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>account_circle</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Title goes here</div>
            </IgrNavDrawerItem>
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
