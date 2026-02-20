/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║                   PROJETO INICIAL - JAVASCRIPT                   ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * INSTRUÇÕES:
 *
 * Este arquivo está preparado com comentários guia (TODOs) para você
 * implementar as funcionalidades JavaScript durante as aulas.
 *
 * Você vai aprender a criar:
 * 1. Menu mobile (toggle abrir/fechar)
 * 2. Ano dinâmico no footer
 * 3. Validação de formulário
 * 4. Animações ao rolar (IntersectionObserver)
 *
 * Siga os TODOs na ordem e consulte a documentação quando necessário!
 */

// TODO: Adicionar event listener para DOMContentLoaded
// Dica: document.addEventListener("DOMContentLoaded", () => { ... });




/* =========================
   1) MENU MOBILE
========================= */

// TODO: Criar função initMobileMenu()
// O que essa função deve fazer:
// - Selecionar o botão toggle e o menu de navegação
// - Adicionar event listener de 'click' no botão
// - Toggle classe 'is-open' no menu
// - Atualizar atributo aria-expanded
// - Fechar menu ao clicar em links (melhor UX)




/* =========================
   2) ANO AUTOMÁTICO NO FOOTER
========================= */

// TODO: Criar função initFooterYear()
// O que essa função deve fazer:
// - Selecionar elemento com id="year"
// - Pegar ano atual: new Date().getFullYear()
// - Atribuir ao textContent do elemento




/* =========================
   3) VALIDAÇÃO DE FORMULÁRIO
========================= */

// TODO: Criar função initFormValidation()
// O que essa função deve fazer:
// - Selecionar formulário e campos (name, email, message)
// - Adicionar event listener para 'submit'
// - Usar event.preventDefault() para impedir envio padrão
// - Validar cada campo:
//   * Nome: mínimo 3 caracteres
//   * Email: formato válido (regex)
//   * Mensagem: mínimo 10 caracteres
// - Mostrar mensagens de erro quando inválido
// - Adicionar classe 'is-invalid' nos campos com erro
// - Mostrar mensagem de sucesso quando válido
// - Limpar formulário com form.reset()

// TODO: Criar função isValidEmail(email)
// Dica: Use regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)




/* =========================
   4) ANIMAÇÃO AO ROLAR (REVEAL)
========================= */

// TODO: Criar função initRevealAnimation()
// O que essa função deve fazer:
// - Selecionar todos os elementos com classe '.reveal'
// - Verificar se navegador suporta IntersectionObserver
// - Criar um observer com threshold: 0.15
// - No callback:
//   * Verificar se entry.isIntersecting
//   * Adicionar classe 'is-visible' ao elemento
//   * Deixar de observar o elemento (performance)
// - Observar todos os elementos .reveal




/* =========================
   DICAS ÚTEIS
========================= */

/**
 * SELECIONANDO ELEMENTOS:
 * - document.getElementById("id")        → Seleciona por ID
 * - document.querySelector(".classe")    → Seleciona primeiro elemento
 * - document.querySelectorAll(".classe") → Seleciona todos elementos
 *
 * MANIPULANDO CLASSES:
 * - element.classList.add("classe")      → Adiciona classe
 * - element.classList.remove("classe")   → Remove classe
 * - element.classList.toggle("classe")   → Alterna classe
 *
 * EVENT LISTENERS:
 * - element.addEventListener("evento", callback)
 * - Eventos comuns: "click", "submit", "scroll", "keydown"
 *
 * MANIPULANDO CONTEÚDO:
 * - element.textContent = "texto"        → Altera texto
 * - element.value                        → Valor de input
 * - element.setAttribute("attr", "val")  → Define atributo
 *
 * FORMULÁRIOS:
 * - event.preventDefault()               → Previne comportamento padrão
 * - form.reset()                         → Limpa todos os campos
 */
