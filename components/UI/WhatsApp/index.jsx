import { ImWhatsapp, ImPhone } from "react-icons/im";
import { RiQuestionAnswerLine, RiHeadphoneFill } from "react-icons/ri";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function WhatsApp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [duvidas, setDuvidas] = useState(false);

  const handleDuvidas = () => setDuvidas(false);

  return (
    <>
      {!duvidas && (
        <div id="whatsapp-duvidas">
          <div>Precisando de ajuda?</div>
          <br />
          <div>
            <span id="talk">Fale com nossa equipe!</span>
          </div>
        </div>
      )}

      <div id="whatsapp">
        <button
          onClick={() => {
            setShow(!show);
            setDuvidas(!duvidas);
          }}
        >
          <ImWhatsapp />
        </button>
      </div>
      {show && (
        <>
          <div id="modal-1" show={show} onHide={handleClose}>
            <div>
              <RiQuestionAnswerLine />
            </div>
            <div>
              <h5>
                Olá, seja <strong>bem-vindo!</strong>
              </h5>
              <p>
                Para <em>dúvidas</em>, <em>informações</em>, <em>orçamentos</em> etc, selecione uma das opções
                abaixo para iniciar um atendimento com nossa equipe!
              </p>
            </div>
          </div>
          <div id="modal-2" show={show} onHide={handleClose}>
            <a
              href="https://wa.me/5517982010001"
              target="_blank"
              className="card-pic"
            >
              <div>
                <img src="/images/faby.png" alt="Fabiana - Vendas" />
              </div>
              <div>
                <strong>Fabiana </strong> <span id="status">Online <RiHeadphoneFill /></span>
                <br />
                <p>Setor de Vendas</p>
              </div>
              <div id="wtpp-logo">
                <ImWhatsapp />
              </div>
            </a>
            <a href="tel:(17)3226-9090" className="card-pic">
              <div>
                <img src="/images/hidr.jpg" alt="Hidraumon - Direção" />
              </div>
              <div>
                <strong>Hidraumon</strong>
                <br />
                <p>Direção</p>
              </div>
              <div id="phone-icon">
                <ImPhone />
              </div>
            </a>
          </div>
        </>
      )}
    </>
  );
}
