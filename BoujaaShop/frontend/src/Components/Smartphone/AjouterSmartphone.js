import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addSmartphone } from "../../Redux/actions/smartphonesAction";
import { loadTels } from "../../Redux/actions/telsAction";
import { loadResaus } from "../../Redux/actions/resauAction";
import { loadCouleurs } from "../../Redux/actions/couleurAction";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const AjoutSmartphone = () => {
    const [ref, setRef] = useState("");
    const [nom, setNom] = useState("");
    const [imei, setImei] = useState("");
    const [prix, setPrix] = useState("");
    const [qtestock, setQtestock] = useState("");
    const [desc, setDesc] = useState("");
    const [tel, setTel] = useState("");
    const [resau, setResau] = useState("");
    const [couleur, setCouleur] = useState([]);
    const [files, setFiles] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(loadTels());
        dispatch(loadResaus());
        dispatch(loadCouleurs());
    }, [dispatch]);
    const tels = useSelector((state) => state.alltels.tels);
    const resaus = useSelector((state) => state.allresaus.resaus);
    const couleurs = useSelector((state) => state.allcouleurs.couleurs);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const liv = {
            ref: ref,
            nom: nom,
            imei: imei,
            prix: prix,
            qtestock: qtestock,
            couverture: files[0].file.name,
            desc: desc,
            tel: tel,
            resau: resau,
            couleur: couleur
        };
        dispatch(addSmartphone(liv));
        navigate("/");
    }
    return (

        <div className="container">

            <form style={{ marginLeft: 8 }}>
                <div>
                    <Button variant="contained"
                        onClick={(event) => handleSubmit(event)}>Ajout</Button>
                </div>
                <FormControl>
                    <TextField
                        variant="outlined"
                        label="ref"
                        value={ref}
                        onChange={e => setRef(e.target.value)}
                        required />
                    <TextField
                        variant="outlined"
                        label="nom"
                        value={nom}
                        onChange={e => setNom(e.target.value)}
                        required />
                    <TextField
                        variant="outlined"
                        type="Number"
                        label="imei"
                        value={imei}
                        onChange={e => setImei(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        type="text"
                        label="description"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        type="Number"
                        label="Prix"
                        value={prix}
                        onChange={e => setPrix(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        type="Number"
                        label="Quantité"
                        value={qtestock}
                        onChange={e => setQtestock(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        select
                        label="model"
                        value={tel}
                        helperText="Sélectionner une model"
                        onChange={e => setTel(e.target.value)}
                    >
                        {
                            tels ?
                                tels.map((spec) =>
                                    <MenuItem key={spec._id}
                                        value={spec._id}>{spec.nomtel}</MenuItem>
                                )
                                : null
                        }
                    </TextField>
                    <TextField
                        variant="outlined"
                        select
                        label="resau"
                        value={resau}
                        helperText="Sélectionner un resau"
                        onChange={e => setResau(e.target.value)}
                    >
                        {
                            resaus ?
                                resaus.map((edi) =>
                                    <MenuItem key={edi._id}
                                        value={edi._id}>{edi.nomresau}</MenuItem>
                                )
                                : null
                        }
                    </TextField>
                    <TextField
                        variant="outlined"
                        select
                        label="couleur"
                        SelectProps={{ multiple: true }}
                        value={couleur}
                        helperText="Sélectionner des couleur"
                        onChange={e => setCouleur(e.target.value)}
                    >
                        {
                            couleurs ?
                                couleurs.map((aut) =>
                                    <MenuItem key={aut._id}
                                        value={aut._id}>{aut.nomcouleur}</MenuItem>
                                )
                                : null
                        }
                    </TextField>
                </FormControl>
            </form>

            <h4>Télécharger Image</h4>
            <FormControl>
                <div style={{ width: 300, height: 50 }}>
                    <FilePond
                        files={files}
                        allowMultiple={false}
                        onupdatefiles={setFiles}
                        labelIdle='<span class="filepond--label-action">Browse
One</span>'
                    />
                </div>
            </FormControl>
        </div>
    );
}
export default AjoutSmartphone 