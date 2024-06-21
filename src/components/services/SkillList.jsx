import "./services.scss";

function SkillList({ src, skill }) {
    return (
      <span>
        <img src={src} alt="Checkmark icon" />
        <p className="skil">{skill}</p>
      </span>
    );
  }
  
  export default SkillList;