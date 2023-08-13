import { Router } from "express";

import {
  usuariosDelete,
  usuariosGet,
  usuariosPatch,
  usuariosPost,
  usuariosPut } from "../controllers/users.js";

const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

export {
  router
}
































// import { Router } from "express";

// const router = Router();

// router.get('/', (req, res) => {
//   res.json({
//     msg: 'get API'
//   });
// });

// router.put('/', (req, res) => {
//   res.json({
//     msg: 'put API'
//   });
// });

// router.post('/', (req, res) => {
//   res.json({
//     msg: 'post API'
//   });
// });

// router.delete('/', (req, res) => {
//   res.json({
//     msg: 'delete API'
//   });
// });

// router.patch('/', (req, res) => {
//   res.json({
//     msg: 'path'
//   })
// })

// export {
//   router
// }
