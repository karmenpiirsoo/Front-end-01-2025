import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';


function ManageHome() {

  const { t } = useTranslation();

  // return <h1>{t('Welcome to React')}</h1>

  return (
    <div>
       <Link to="/manage-stores">
        <button>{t("admin.manage-shops")}</button>
      </Link>
      <Link to="/manage-prices">
        <button>{t("admin.manage-prices")}</button>
      </Link>
      <Link to="/manage-users">
        <button>{t("admin.manage-users")}</button>
      </Link>
      <Link to="/manage-pictures">
        <button>{t("admin.manage-pictures")}</button>
      </Link>
      <Link to="/manage-employees">
        <button>{t("admin.manage-workers")}</button>
      </Link>
      <Link to="/manage-products">
        <button>Halda tooteid</button>
      </Link>
    </div>
  )
}

export default ManageHome

