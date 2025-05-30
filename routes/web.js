import { Router } from 'express';
import express from 'express';
import path from 'path';
import CONSTANTS from '../var/constants.js';
import apiClients from './api.js'

const router = Router();

router.use(express.json());

// Servir arquivos estáticos (CSS, JS, imagens etc.)
router.use(express.static(path.join(CONSTANTS.DIR, 'public')));

// Servir um arquivo HTML específico na rota '/'
router.get('/', (req, res) => {
  res.sendFile(path.join(CONSTANTS.DIR, 'public', 'index.html'));
});

// IMPORTANTE: primeiro usar as rotas da API
router.use('/', apiClients);

// Middleware de "Not Found" SEMPRE por último
router.use((req, res) => {
  res.status(CONSTANTS.HTTP.NOT_FOUND).json({ error: "Not found" });
});

export default router;
