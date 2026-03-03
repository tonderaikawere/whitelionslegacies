import React, { useEffect, useMemo, useState } from "react";

const SafeImage = ({ src, alt = "", fallbackSrc = "/logo.jpg", ...props }) => {
  const [failed, setFailed] = useState(false);
  const [retrySrc, setRetrySrc] = useState("");

  useEffect(() => {
    setFailed(false);
    setRetrySrc("");
  }, [src]);

  const finalSrc = useMemo(() => {
    if (!src) return fallbackSrc;
    if (failed) return fallbackSrc;
    return retrySrc || src;
  }, [src, retrySrc, failed, fallbackSrc]);

  const onError = () => {
    if (retrySrc) {
      setFailed(true);
      return;
    }

    const s = String(src || "");
    const marker = "/wiki/Special:FilePath/";
    const idx = s.indexOf(marker);
    if (idx === -1) {
      setFailed(true);
      return;
    }

    try {
      const prefix = s.slice(0, idx + marker.length);
      const rawName = s.slice(idx + marker.length);
      const decoded = decodeURIComponent(rawName);
      const normalized = decoded.replace(/\s+/g, " ").trim().replace(/ /g, "_");
      const next = `${prefix}${encodeURIComponent(normalized)}`;
      setRetrySrc(next);
    } catch {
      setFailed(true);
    }
  };

  return (
    <img
      src={finalSrc}
      alt={alt}
      onError={onError}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default SafeImage;
