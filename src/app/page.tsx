'use client'

import Header from '@/components/header';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#0a0a0a',
    },
  },
});

// import Image from "next/image";
// import styles from "./page.module.css";

export default function HomePage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <div>Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora quod ratione quia possimus! Aliquam deleniti nobis vero nesciunt odit nisi consequatur harum accusamus alias quibusdam, necessitatibus at deserunt impedit.
      Eum consequuntur id voluptatibus laboriosam molestias nesciunt maxime tempora fugiat nostrum deleniti aut accusantium cumque cum dicta iusto, recusandae vero error rerum exercitationem eos repellat distinctio? Repudiandae sequi corporis eligendi.
      Modi eaque minima in officia itaque mollitia est tempore ipsum. Expedita molestias perspiciatis suscipit fugiat placeat excepturi, consequuntur ut minima blanditiis possimus nisi debitis. Omnis iste ratione tempora excepturi at.
      Magni eveniet voluptate doloremque accusantium aspernatur quam vel ullam, accusamus cupiditate ratione debitis quia voluptatem dolores sed, tempore reprehenderit maiores ipsum tenetur assumenda praesentium. Nesciunt doloribus a sapiente obcaecati ut.
      Optio repellat id nostrum, dolor qui aperiam temporibus ipsam itaque, sit numquam atque aut tenetur accusamus corporis harum laboriosam ex. Iste, sint. Libero corporis sit quam dolores sint aspernatur eveniet!
      Earum suscipit, sunt deserunt aut numquam repudiandae incidunt accusantium quaerat sed minima eius voluptatibus fugit aperiam reiciendis doloremque id. Tenetur, itaque. Blanditiis doloremque esse commodi voluptate fuga consequuntur dolore vitae.
      Numquam, earum minus quam, nam ex quas rem soluta saepe mollitia doloremque ipsa commodi suscipit consequuntur asperiores est nihil id iusto. Facilis sit, illo labore et ipsa voluptatibus quae porro!
      Non pariatur illo, omnis expedita enim adipisci, nisi nam laudantium saepe, sit dolorum officiis. Dolores repellendus amet qui neque officiis, dicta itaque ipsa numquam corporis, quibusdam, beatae vel quas soluta?
      Mollitia saepe delectus, blanditiis reiciendis, quibusdam optio totam eveniet possimus maiores perferendis natus illum, architecto quam atque molestias neque! Eius ipsam rerum enim quidem culpa, rem ducimus quibusdam vero alias.
      Culpa ut unde minima nesciunt id nulla recusandae mollitia sed voluptates! Voluptatum quidem aliquam quibusdam optio perspiciatis voluptatibus atque cum, deleniti vel corrupti veritatis nisi aperiam iusto mollitia repudiandae nobis?
      Perspiciatis possimus in, recusandae cupiditate ratione ex dolores vitae molestias iste beatae tenetur illum quae eligendi autem numquam quos totam amet. Repellendus quibusdam quisquam pariatur vel, nesciunt dolor qui ullam?
      Ad voluptatem vitae error maxime ea unde velit ducimus labore, repellendus accusamus ipsum esse iste. Consequatur, eligendi, voluptates, libero ut non quas qui quae a earum repellendus cumque ipsam temporibus.
      Natus hic, placeat inventore obcaecati libero repudiandae possimus eaque sed aspernatur quod, suscipit recusandae doloribus quis nostrum quaerat sit blanditiis soluta praesentium corrupti? Enim eligendi perspiciatis, quas et quod numquam.
      Officiis, similique? In autem ducimus voluptatem nesciunt aliquam, magni magnam a quisquam rem atque molestias quas et distinctio quo voluptatibus? Qui fugit odit vel magnam accusantium quaerat nisi ex adipisci.
      Rem animi vel perferendis, esse, iusto facilis deserunt quis ratione, doloribus veritatis aliquam! Sequi et vel pariatur obcaecati non harum sapiente laborum quae totam nesciunt distinctio facilis praesentium, dolore iusto.</div>;
    </ThemeProvider>
  )
}
