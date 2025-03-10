import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';



function HaldaHome() {
  const { t } = useTranslation();

  // return <h1>{t('Welcome to React')}</h1>

  return (
    <div>
        <Link to="/halda-esindused">
        <button>{t("admin.manage-shops")}</button>
      </Link>
      <Link to="/halda-hinnad">
        <button>{t("admin.manage-prices")}</button>
      </Link>
      <Link to="/halda-kasutajad">
        <button>{t("admin.manage-users")}</button>
      </Link>
      <Link to="/halda-pildid">
        <button>{t("admin.manage-pictures")}</button>
      </Link>
      <Link to="/halda-tootajad">
        <button>{t("admin.manage-workers")}</button>
      </Link>
      <Link to="/halda-tooted">
        <button>Halda tooteid</button>
      </Link>
    </div>
  )
}

export default HaldaHome