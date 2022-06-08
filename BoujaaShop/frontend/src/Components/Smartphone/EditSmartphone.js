import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loadSinglesmartphone , updatesmartphone } from "../../Redux/actions/smartphonesAction";
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
const EditSmartphone = () => {
    const [state, setState] = useState({
        ref: "", nom: "", imei: "",
        prix: "", qtestock: "",tel: "",
        resau: "", couleur: []
    });

    const [aut, setAut] = useState([])
    const [files, setFiles] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const _id = params._id;
    useEffect(() => {
        dispatch(loadSinglesmartphone(_id));
        dispatch(loadTels());
        dispatch(loadResaus());
        dispatch(loadCouleurs());
        setFiles("");
    }, [_id, dispatch]);

    const smartphone = useSelector((state) => state.allsmartphones.smartphone);
    const tels = useSelector((state) => state.alltels.tels);
    const resaus = useSelector((state) => state.allresaus.resaus);
    const couleurs = useSelector((state) => state.allcouleurs.couleurs);

    useEffect(() => {
        setState(smartphone);
        setFiles(smartphone.couverture)
    }, [smartphone]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(aut)
        const liv = {
            _id: _id,
            ref: state.ref,
            nom: state.nom,
            imei: state.imei,
            prix: state.prix,
            qtestock: state.qtestock,
            couverture: files[0].file.name,
            tel: state.tel,
            resau: state.resau,
            couleur: aut.length > 0 ? aut : state.couleur
        };
        dispatch(updatesmartphone(liv));
        navigate("/");
    }
    const handelInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    const labeltel = () => {
        if (state.tel) {
            if (state.tel.nomtel) return "model :" + state.tel.nomtel
        }
        else return null
    }
    const labelresau = () => {
        if (state.resau) {
            if (state.resau.nomresau) return "resaus :" + state.resau.nomresau
        }
        else return null
    }
    const labelcouleur = () => {
        if (state.couleurs) {
            let ch = ""
            state.couleurs.map((aut)=>{
                if (aut.nomcouleur)
                    ch = ch + aut.nomcouleur
            })
            return ch
        }
        else return null
    }
    const handleCouleurs = (event) => {
        setState({ ...state, "couleur": [] });

        setAut(event.target.value);

    }
    return (

        <div className="container">

            <form style={{ marginLeft: 8 }}>
                <div>
                    <Button color="secondary" variant="contained"
                        onClick={(event) => handleSubmit(event)}>Modifier</Button>
                </div>
                <FormControl>
                    <TextField name="ref"
                        variant="outlined"
                        label="ref"
                        value={state.ref}
                        onChange={handelInputChange}
                        required
                        style={{ margin: 10 }} />
                    <TextField name="nom"
                        variant="outlined"
                        label="nom"
                        value={state.nom}
                        onChange={handelInputChange}
                        required
                        style={{ margin: 10 }} />
                    <TextField name="imei"
                        variant="outlined"
                        type="Number"
                        label="imei"
                        value={state.imei}
                        onChange={handelInputChange}
                        style={{ margin: 10 }} />
                    <TextField name="prix"
                        variant="outlined"
                        type="Number"
                        label="Prix"
                        value={state.prix}
                        onChange={handelInputChange}
                        style={{ margin: 10 }} />
                    <TextField name="qtestock"
                        variant="outlined"
                        type="Number"
                        label="Quantité"
                        value={state.qtestock}
                        onChange={handelInputChange}
                        style={{ margin: 10 }} />

                    <TextField name="tel"
                        variant="outlined"
                        select
                        label={labeltel()}
                        value={state.tels}
                        onChange={handelInputChange}
                        style={{ margin: 10 }}>

                        {
                            tels ?
                                tels.map((spec) =>
                                    <MenuItem key={spec._id}
                                        value={spec._id}>{spec.nomtel}</MenuItem>
                                )
                                : null
                        }
                    </TextField>
                    <TextField name="resau"
                        variant="outlined"
                        select
                        label={labelresau()}
                        value={state.resaus}
                        onChange={handelInputChange}
                        style={{ margin: 10 }}>

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
                        name="couleurs"
                        variant="outlined"
                        select
                        label={labelcouleur()}
                        SelectProps={{ multiple: true }}
                        value={aut ? aut : state.couleurs}
                        helperText="Sélectionner des couleurs"
                        onChange={(event) => handleCouleurs(event)}
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
export default EditSmartphone