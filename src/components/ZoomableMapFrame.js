import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Plus, Minus, Maximize2 } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

import "../styles/ZoomableMapFrame.css";

export default function ZoomableMapFrame({ src, alt }) {
  const { t } = useLanguage();

  return (
    <div className="zoomable-map-frame">
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={4}
        centerOnInit
        limitToBounds
        wheel={{ disabled: true }}
        doubleClick={{ mode: "zoomIn", step: 0.65 }}
        pinch={{ step: 6 }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <TransformComponent
              wrapperClass="zoomable-map-frame__wrapper"
              contentClass="zoomable-map-frame__content"
            >
              <img
                src={src}
                alt={alt}
                className="zoomable-map-frame__img"
                decoding="async"
                draggable={false}
              />
            </TransformComponent>

            <div className="zoomable-map-frame__controls" aria-hidden="false">
              <button
                type="button"
                className="zoomable-map-frame__btn"
                onClick={() => zoomIn()}
                aria-label={t.mapFrame.zoomIn}
              >
                <Plus size={16} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                className="zoomable-map-frame__btn"
                onClick={() => zoomOut()}
                aria-label={t.mapFrame.zoomOut}
              >
                <Minus size={16} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                className="zoomable-map-frame__btn"
                onClick={() => resetTransform()}
                aria-label={t.mapFrame.reset}
              >
                <Maximize2 size={14} strokeWidth={2.5} />
              </button>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
