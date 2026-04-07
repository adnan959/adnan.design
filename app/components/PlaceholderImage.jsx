export default function PlaceholderImage({ label, aspectRatio = '16/9' }) {
  return (
    <div
      className="placeholder-image"
      style={{
        aspectRatio,
        background: '#2C3038',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '24px',
      }}
    >
      <span
        style={{
          color: '#7D868E',
          fontSize: '16px',
          fontWeight: 600,
          fontFamily: 'proxima-nova, sans-serif',
          textAlign: 'center',
          lineHeight: 1.4,
          maxWidth: '400px',
        }}
      >
        {label}
      </span>
    </div>
  );
}
